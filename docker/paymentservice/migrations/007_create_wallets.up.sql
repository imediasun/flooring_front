CREATE TABLE IF NOT EXISTS wallets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    address VARCHAR(255) NOT NULL UNIQUE,  -- Уникальный адрес кошелька
    user_id UUID NOT NULL,                        -- ID пользователя
    currency_id UUID REFERENCES currencies(id),     -- Валюта
    balance DECIMAL(20, 8) DEFAULT 0.0,
    status VARCHAR(20) DEFAULT 'active',   -- Статус кошелька (active, archived, etc.)
    last_encashment TIMESTAMP NULL,      -- Дата последней инкассации
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, currency_id)
    );


