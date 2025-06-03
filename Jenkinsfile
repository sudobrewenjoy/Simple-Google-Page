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
        pollSCM('H/5 * * * *') // Poll Git every 5 minutes
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }



    post {
        success {
            emailext(
                subject: "✅ Jenkins Job Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """\
Good news!

The Jenkins job '${env.JOB_NAME}' build #${env.BUILD_NUMBER} was successful.

Check it here: ${env.BUILD_URL}
""",
                to: 'thiru260402@gmail.com',
                from: 'thiru260402@gmail.com',
                mimeType: 'text/plain'
            )
        }

        failure {
            emailext(
                subject: "❌ Jenkins Job Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """\
Oops!

The Jenkins job '${env.JOB_NAME}' build #${env.BUILD_NUMBER} has failed.

Check the logs here: ${env.BUILD_URL}
""",
                to: 'thiru260402@gmail.com',
                from: 'thiru260402@gmail.com',
                mimeType: 'text/plain'
            )
        }
    }
}
