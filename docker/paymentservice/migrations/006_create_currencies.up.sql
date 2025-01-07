CREATE TABLE IF NOT EXISTS currencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL,        -- Тип: crypto или fiat
    decimals INT DEFAULT 8,          -- Кол-во знаков после запятой
    blockchain VARCHAR(50),          -- Блокчейн
    contract_address VARCHAR(255),   -- Адрес контракта (если применимо)
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


