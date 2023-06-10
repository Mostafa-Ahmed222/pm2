module.exports = {
  apps: [
    {
      name: "my-app",
      script: "app.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      out_file: "./logs/app.log",
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      log_type: 'json',
      log_format: 'json',
      kill_timeout: 4000,
      // args: '--wait-ready',
    }
  ]
}


/* 
module.exports = {
  apps: [
    {
      name: 'my-app',
      script: 'app.js',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      out_file: './logs/app.log',
      merge_logs: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      log_type: 'json',
      log_file: './logs/pm2.log',
      log_format: 'json',
      log_file_max_size: '10MB',
      log_file_backups: 3,
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};

*/