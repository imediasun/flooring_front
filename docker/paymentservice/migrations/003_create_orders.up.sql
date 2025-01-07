CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Используем UUID
  user_id UUID NOT NULL,                           -- Внешний ключ к пользователю
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10, 2) NOT NULL,                 -- Сумма заказа
  currency VARCHAR(3) DEFAULT 'USD',              -- Валюта заказа
  status VARCHAR(50) DEFAULT 'pending',           -- Статус заказа (pending, paid, canceled)
  description TEXT,                               -- Описание заказа
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

