/*
  Warnings:

  - You are about to drop the column `ip` on the `Visitor` table. All the data in the column will be lost.
  - Added the required column `ip_address` to the `Visitor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_agent` to the `Visitor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Visitor" DROP COLUMN "ip",
ADD COLUMN     "browser" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "device_type" TEXT,
ADD COLUMN     "ip_address" TEXT NOT NULL,
ADD COLUMN     "os" TEXT,
ADD COLUMN     "page_url" TEXT,
ADD COLUMN     "referrer" TEXT,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "session_id" TEXT,
ADD COLUMN     "user_agent" TEXT NOT NULL,
ADD COLUMN     "visited_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
