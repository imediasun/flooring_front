CREATE TABLE IF NOT EXISTS plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Используем UUID
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,               -- Базовая стоимость подписки
  currency VARCHAR(3) DEFAULT 'USD',           -- Валюта
  max_rooms INT DEFAULT 0,                     -- Количество включенных комнат в план
  extra_room_fee DECIMAL(10, 2) DEFAULT 0.0,   -- Стоимость за каждую дополнительную комнату
  duration INT DEFAULT 30,                     -- Продолжительность подписки в днях (например, 30 дней)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
