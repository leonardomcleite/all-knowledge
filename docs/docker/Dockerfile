FROM httpd:2.4-alpine

#Configuration
RUN mkdir -p /app/

ADD httpd.conf /usr/local/apache2/conf/httpd.conf
ADD dist /app/dist

ADD startup.sh /app/startup.sh
RUN chmod +x /app/startup.sh

CMD ["/app/startup.sh"]