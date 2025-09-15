# Kullanılacak temel görüntü
FROM nginx

# Çalışma dizini ayarla
WORKDIR /usr/share/nginx/html

# Uygulama kodunu kopyala
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/
COPY res.ico /usr/share/nginx/html/

#Docker içindeki Portu ayarlama.
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]
