#!/bin/bash
APP_DIRECTORY=/app/dist

function configure() {
  echo "Configuring application..."
  if [[ "$APP_BASE_HREF" != "" ]]; then
    sed -i 's@<base href="/">@'"<base href=\"$APP_BASE_HREF\">"'@g' "${APP_DIRECTORY}/index.html"
    echo "Context: ${APP_BASE_HREF}"
  fi

  sed -i 's@$APP_BACKEND_URL_CORE@'"${APP_BACKEND_URL_CORE}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Back-end URL: ${APP_BACKEND_URL_CORE}"

  sed -i 's@$APP_FRONT_REDIRECTURL@'"${APP_FRONT_REDIRECTURL}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Front-end Redirect URL: ${APP_FRONT_REDIRECTURL}"

  sed -i 's@$ENABLED_SECURITY@'"${ENABLED_SECURITY}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Security Enabled: ${ENABLED_SECURITY}"

  sed -i 's@$BASE_OAUTH2_URL@'"${BASE_OAUTH2_URL}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Base OAuth2 URL: ${BASE_OAUTH2_URL}"

  sed -i 's@$REPORT_API_BASEURL@'"${REPORT_API_BASEURL}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Report API Base URL: ${REPORT_API_BASEURL}"

  sed -i 's@$CLIENT_ID@'"${CLIENT_ID}"'@g' ${APP_DIRECTORY}/main.*.js
  echo "Report API Base URL: ${CLIENT_ID}"

  echo "Application configured"
}

function deploy() {
  echo "Deploying application..."
  if [ -z "${APP_CONTEXT_PATH}" ]; then
    echo "Using / as application context path"
    cp -r ${APP_DIRECTORY}/* /usr/local/apache2/htdocs
  else
    echo "Using /${APP_CONTEXT_PATH} as application context path"
    ln -sf ${APP_DIRECTORY} /usr/local/apache2/htdocs/${APP_CONTEXT_PATH}
    ln -sf ${APP_DIRECTORY}/index.html /usr/local/apache2/htdocs/index.html
  fi
  echo "Application deployed successfully"
}

function init() {
  echo "Initialising Apache HTTPD..."
  date
  httpd-foreground
}

configure
deploy
init