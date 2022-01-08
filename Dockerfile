FROM node:12.22-alpine

ARG ssh_pub_key

RUN mkdir -p /root/.ssh \
    && chmod 0700 /root/.ssh \
    && passwd -u root \
    && echo "$ssh_pub_key" > /root/.ssh/authorized_keys \
    && apk add openrc openssh \
    && ssh-keygen -A \
    && sed -i 's/AllowTcpForwarding no/AllowTcpForwarding yes/g' /etc/ssh/sshd_config \
    && echo -e "PasswordAuthentication no" >> /etc/ssh/sshd_config \
    && mkdir -p /run/openrc \
    && touch /run/openrc/softlevel
    
WORKDIR /app

COPY . .

RUN yarn && yarn build

ENTRYPOINT ["sh", "-c", "rc-status; rc-service sshd start; yarn start"]
