FROM php:7.3.24-fpm
RUN apt-get update -y && apt-get install -y libmcrypt-dev openssl
RUN docker-php-ext-install pdo mbstring
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
WORKDIR /app
COPY . /app
RUN pecl install mongodb
RUN composer update
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000
