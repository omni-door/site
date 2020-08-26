module.exports = {
  apps: [
    {
      name: 'omni-door-site',
      script: './node_modules/.bin/omni start',
      cwd: './',
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      instances: "max",
      node_args: '--harmony',
      env_test: {
        NODE_ENV: 'test',
        API_ENV: 'test',
        PORT: 6200,
      },
      env_prod: {
        NODE_ENV: 'prod',
        API_ENV: 'prod',
        PORT: 6600,
      },
      log_file: '/home/ubuntu/var/log/omni-door/site.log',
      error_file: '/home/ubuntu/var/log/omni-door/site-err.log',
      out_file: '/home/ubuntu/var/log/omni-door/site-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z' // 设置日志的日期格式
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.188.122.175',
      ref: 'origin/master',
      repo: 'git@github.com:omni-door/site.git',
      path: '/home/ubuntu/www/omni-door',
      key: '~/.ssh/aws_free.pem',
      'post-deploy': 'git pull && yarn && yarn build && yarn reload',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
