import { Controller, Get, Render } from '@nestjs/common';

@Controller('games')
export class GamesController {
    @Get()
    @Render('games')
    games() {
        return { title: 'Games' };
    }

    @Get('gamelol')
    @Render('gamelol')
    gamelol() {
        return { title: 'Game 1' };
    }

    @Get('gamecs')
    @Render('gamecs')
    gamecs() {
        return { title: 'Game 2' };
    }

    @Get('gameval')
    @Render('gameval')
    gameval() {
        return { title: 'Game 3' };
    }

    @Get('gameapex')
    @Render('gameapex')
    gameapex() {
        return { title: 'Game 4' };
    }
}