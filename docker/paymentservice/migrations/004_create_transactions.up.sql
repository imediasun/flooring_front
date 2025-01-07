CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  type VARCHAR(20) NOT NULL,                 -- deposit, withdraw
  amount DECIMAL(20, 8) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',      -- pending, completed, failed
  error_message TEXT,                        -- Для ошибок (nullable)
  transaction_hash VARCHAR(255) UNIQUE, -- Хеш транзакции для блокчейна
  processed BOOLEAN DEFAULT FALSE,     -- Флаг обработки транзакции
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
