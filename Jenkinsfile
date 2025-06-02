pipeline {
    agent none

    tools {
        nodejs 'nodejs'
    }
    
        
    parameters {
        string(name: 'ENVIRONMENT', defaultValue: 'dev', description: 'Deployment environment')
        booleanParam(name: 'DEPLOY', defaultValue: false, description: 'Deploy after build?')
        choice(name: 'VERSION', choices: ['v1.0', 'v2.0', 'v3.0'], description: 'Select version')
    }


    environment {
        IMAGE_NAME = 'googleprodapp'
        DOCKER_TAG = "${params.VERSION ?: 'latest'}" 
    }

    triggers {
        pollSCM('H/5 * * * *')  // Poll Git every 5 minutes
    }

    stages {

        stage("Quality Checks") {
            parallel {
                stage("Lint Code") {
                    agent { label 'node-agent' }
                    steps {
                        sh 'npm install --legacy-peer-deps'
                        sh 'npm run lint'
                    }
                }

                stage("Run Unit Tests") {
                    agent { label 'node-agent' }
                    steps {
                        sh 'npm install --legacy-peer-deps'
                        sh 'npm test'
                    }
                }
            }
        }

        stage('List Workspace Files') {
            steps {
                echo "ENVIRONMENT: ${params.ENVIRONMENT}"
                echo "DEPLOY: ${params.DEPLOY}"
                echo "VERSION: ${params.VERSION}"
                sh 'ls -la'
            }
        }


        stage("Build Docker Image") {
            agent { label 'docker-agent' }
            steps {
                sh "docker build -t ${IMAGE_NAME}:${DOCKER_TAG} ."
            }
        }

        stage("Push to DockerHub") {
            agent { label 'docker-agent' }
            steps {
                script {
                    def localImage = "${IMAGE_NAME}:${DOCKER_TAG}"
                    def remoteImage = "thirumalaiboobathi/googleprodapp:${DOCKER_TAG}"

                    sh "docker tag ${localImage} ${remoteImage}"
                    sh "docker push ${remoteImage}"
                }
            }
        }

        stage("Deploy to Kubernetes") {
            agent { label 'k8s-agent' }
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }

        stage('Generate Timestamp File') {
            steps {
                script {
                    def timestamp = new Date().format("yyyy-MM-dd_HH-mm-ss")
                    writeFile file: "timestamp.txt", text: "Build timestamp: ${timestamp}\n"
                }
            }
        }
        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'timestamp.txt'
            }
        }
    }

    // Configure artifact retention for last 5 builds
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    post {
        always {
            cleanWs()
        }
        success {
            emailext(
                subject: "✅ Jenkins Job Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Good news!\n\nThe Jenkins job '${env.JOB_NAME}' build #${env.BUILD_NUMBER} was successful.\n\nCheck it here: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                to: 'thiru260402@gmail.com'
            )
        }
        failure {
            emailext(
                subject: "❌ Jenkins Job Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Oops!\n\nThe Jenkins job '${env.JOB_NAME}' build #${env.BUILD_NUMBER} has failed.\n\nCheck the logs here: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                to: 'thiru260402@gmail.com'
            )
        }
    }
}
