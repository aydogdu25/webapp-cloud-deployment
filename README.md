# Bulut Bilişim ve Sanallaştırma Projesi  

Bu repo, **Docker** ve **Google Cloud Platform (GCP)** kullanılarak basit bir web uygulamasının sanallaştırılması ve buluta dağıtılmasını konu alan projeyi içermektedir.  

## 📌 Proje Hakkında  
Bu çalışmada:  
- Bulut bilişim ve sanallaştırma teknolojileri açıklanmıştır.  
- Basit bir web uygulaması (direnç renk kodlarına göre değer hesaplama sitesi) geliştirilmiştir.  
- Docker kullanılarak uygulama container içine alınmış ve yerel ortamda test edilmiştir.  
- GCP kullanılarak buluta dağıtım yapılmıştır.  

## 🚀 Kullanılan Teknolojiler  
- **HTML, CSS, JavaScript** → Web uygulaması geliştirme  
- **Docker** → Container oluşturma ve sanallaştırma  
- **Nginx** → Web sunucusu  
- **Google Cloud Platform (GCP)** → Bulut dağıtımı  
- **Cloud Run & Artifact Registry** → Uygulamanın bulutta çalıştırılması  

## 🔧 Kurulum ve Çalıştırma  
### 1. Docker İmajı Oluşturma  
```bash
docker build -t proje-imaj .
docker run -d -p 3000:80 --name proje-container proje-imaj
```

### 2. İmajı GCP’ye Gönderme  
```bash
gcloud auth configure-docker europe-docker.pkg.dev
docker tag <imaj-id> europe-docker.pkg.dev/<proje-adı>/<repo>/<imaj-ismi>
docker push europe-docker.pkg.dev/<proje-adı>/<repo>/<imaj-ismi>
```

### 3. Cloud Run ile Dağıtım  
- GCP konsoluna giriş yap  
- Cloud Run hizmetinde yeni servis oluştur  
- Container portunu **80** olarak ayarla  
- Servis oluşturulduktan sonra verilen URL üzerinden uygulamaya eriş 