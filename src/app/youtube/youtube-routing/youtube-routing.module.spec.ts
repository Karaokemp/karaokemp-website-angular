import { YoutubeRoutingModule } from './youtube-routing.module';

describe('YoutubeRoutingModule', () => {
  let youtubeRoutingModule: YoutubeRoutingModule;

  beforeEach(() => {
    youtubeRoutingModule = new YoutubeRoutingModule();
  });

  it('should create an instance', () => {
    expect(youtubeRoutingModule).toBeTruthy();
  });
});
