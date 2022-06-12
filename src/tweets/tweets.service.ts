import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet, TweetDocument } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}

  create(createTweetDto: CreateTweetDto) {
    const tweet = new this.tweetModel(createTweetDto);
    return tweet.save();
  }

  findAll() {
    return this.tweetModel.find();
  }

  findOne(id: string) {
    return this.tweetModel.findById(id);
  }

  update(id: string, updateTweetDto: UpdateTweetDto) {
    return this.tweetModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateTweetDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.tweetModel.deleteOne({ _id: id }).exec();
  }
}
