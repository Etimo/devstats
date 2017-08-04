FROM jazzdd/alpine-flask:python3

RUN rm /etc/nginx/nginx.conf
ADD ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /app

ADD ./requirements.txt .
RUN pip3 install -r requirements.txt

ADD . .
