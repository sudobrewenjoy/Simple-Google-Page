pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    environment {
        IMAGE_NAME = 'googleprodapp'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage("Install Dependencies") {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${DOCKER_TAG} ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    def localImage = "${IMAGE_NAME}:${DOCKER_TAG}"
                    def remoteImage = "thirumalaiboobathi/googleprodapp:${DOCKER_TAG}"

                    sh "docker tag ${localImage} ${remoteImage}"
                    sh "docker push ${remoteImage}"
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
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
