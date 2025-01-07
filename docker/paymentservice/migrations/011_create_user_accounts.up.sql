CREATE TABLE user_accounts (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   user_id UUID NOT NULL,                 -- ID пользователя
   balance DECIMAL(20, 8) NOT NULL DEFAULT 0.0,      -- Баланс пользователя
   currency_id UUID REFERENCES currencies(id),     -- Валюта
   wallet_address VARCHAR(255),
   status VARCHAR(50),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
