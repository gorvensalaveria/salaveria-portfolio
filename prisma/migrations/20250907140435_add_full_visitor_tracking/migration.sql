-- AlterTable
ALTER TABLE "public"."Visitor" ALTER COLUMN "ip_address" DROP NOT NULL,
ALTER COLUMN "user_agent" DROP NOT NULL;
