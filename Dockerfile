# Version:${VERSION}
FROM tomcat:latest
MAINTAINER BEYONDCENT 794774196@qq.com
ADD ./target/otcplatform.war /usr/local/tomcat/webapps
ENV TZ Asia/Shanghai
#RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime