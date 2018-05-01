# Version:${VERSION}
FROM tomcat:latest
MAINTAINER BEYONDCENT mayunhao@beyondcent
ADD ./target/otcplatform.war /usr/local/tomcat/webapps
ENV TZ Asia/Shanghai
#RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime