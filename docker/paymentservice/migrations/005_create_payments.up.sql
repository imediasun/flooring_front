CREATE TABLE IF NOT EXISTS payments (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Используем UUID
   order_id UUID REFERENCES orders(id),             -- Внешний ключ к заказу
   payment_method VARCHAR(50),                     -- Способ оплаты (credit_card, paypal, bitcoin, etc.)
   amount DECIMAL(10, 2) NOT NULL,                 -- Сумма платежа
   currency VARCHAR(3) DEFAULT 'USD',
   transaction_id UUID REFERENCES transactions(id) UNIQUE,             -- ID транзакции, связанный с платежной системой
   status VARCHAR(50) DEFAULT 'completed',         -- Статус платежа (completed, failed, refunded)
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


