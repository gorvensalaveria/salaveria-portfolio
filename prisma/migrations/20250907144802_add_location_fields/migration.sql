/*
  Warnings:

  - You are about to drop the column `session_id` on the `Visitor` table. All the data in the column will be lost.
  - You are about to drop the column `visited_at` on the `Visitor` table. All the data in the column will be lost.
  - Made the column `browser` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `device_type` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ip_address` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `os` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `page_url` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `referrer` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `region` on table `Visitor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_agent` on table `Visitor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Visitor" DROP COLUMN "session_id",
DROP COLUMN "visited_at",
ALTER COLUMN "browser" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "device_type" SET NOT NULL,
ALTER COLUMN "ip_address" SET NOT NULL,
ALTER COLUMN "os" SET NOT NULL,
ALTER COLUMN "page_url" SET NOT NULL,
ALTER COLUMN "referrer" SET NOT NULL,
ALTER COLUMN "region" SET NOT NULL,
ALTER COLUMN "user_agent" SET NOT NULL;
