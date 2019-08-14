module.exports = {
    apps: [{
        name: 'csc648-team6',
        script: './index.js',
        cwd: "/home/ubuntu/server/current/application"
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-52-53-193-123.us-west-1.compute.amazonaws.com',
            key: '~/.ssh/team6_csc648.pem',
            ref: 'origin/master',
            repo: 'git@github.com:CSC-648-SFSU/csc648-su19-Team06.git',
            path: '/home/ubuntu/server/',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}