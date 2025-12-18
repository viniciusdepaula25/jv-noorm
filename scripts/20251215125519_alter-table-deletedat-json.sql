-- Description: alter-table-deletedat-json
--      Script: 20251215125519_alter-table-deletedat-json.sql 
--   File name: 20251215125519
--  Created at: 15/12/2025 12:55
--      Author: vinicius

ALTER TABLE users MODIFY deleted_at JSON;
ALTER TABLE task MODIFY deleted_at JSON;