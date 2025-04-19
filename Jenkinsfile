pipeline {
    agent {
        docker {
            image 'node:18-alpine' // Use a lightweight Node.js image
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Clean install using package-lock.json
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                
                sh 'npm test -- --watchAll=false --coverage'
            }
        }

        stage('Archive Test Results') {
            steps {
                
                junit 'coverage/junit.xml'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'There was a problem building or testing the app.'
        }
    }
}
