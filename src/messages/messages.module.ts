import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepositroy } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepositroy, MessagesService],
})
export class MessagesModule {}
