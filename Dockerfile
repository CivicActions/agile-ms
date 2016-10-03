FROM httpd:2.4
COPY ./.docker/httpd.conf /usr/local/apache2/conf/httpd.conf
ADD ./docroot/ /usr/local/apache2/htdocs/
