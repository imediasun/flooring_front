CREATE TABLE IF NOT EXISTS subscriptions (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Используем UUID
   user_id UUID NOT NULL,                          -- Внешний ключ к пользователю (onboardingsvc)
   plan_id UUID REFERENCES plans(id),               -- Внешний ключ к плану
   start_date TIMESTAMP NOT NULL,                  -- Дата начала подписки
   end_date TIMESTAMP NOT NULL,                    -- Дата окончания подписки
   status VARCHAR(50) DEFAULT 'active',            -- Статус подписки (active, expired, canceled)
   total_rooms INT DEFAULT 0,                      -- Общее количество обслуживаемых комнат
   extra_room_count INT DEFAULT 0,                 -- Количество дополнительных комнат
   extra_room_fee_total DECIMAL(10, 2) DEFAULT 0.0, -- Общая стоимость за дополнительные комнаты
   total_price DECIMAL(10, 2) DEFAULT 0.0,          -- Итоговая стоимость подписки
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
