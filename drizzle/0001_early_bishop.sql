ALTER TYPE "type" ADD VALUE 'VOICE';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'WRITE';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'DRAG';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'DROP';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'MATCH';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'FILL';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'SPEAK';--> statement-breakpoint
ALTER TYPE "type" ADD VALUE 'LISTEN';--> statement-breakpoint
ALTER TABLE "user_progress" ALTER COLUMN "user_image_src" SET DEFAULT '/mascot.svg';--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "description" text NOT NULL;