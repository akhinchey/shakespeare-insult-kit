import React, { Component } from 'react';
import './App.css';
import Button from "./Button";

var col1 = [
  'artless',
  'bawdy',
  'beslubbering',
  'bootless',
  'churlish',
  'cockered',
  'clouted',
  'craven',
  'currish',
  'dankish',
  'dissembling',
  'droning',
  'errant',
  'fawning',
  'fobbing',
  'froward',
  'frothy',
  'gleeking',
  'goatish',
  'gorbellied',
  'impertinent',
  'infectious',
  'jarring',
  'loggerheaded',
  'lumpish',
  'mammering',
  'mangled',
  'mewling',
  'paunchy',
  'pribbling',
  'puking',
  'puny',
  'qualling',
  'rank',
  'reeky',
  'roguish',
  'ruttish',
  'saucy',
  'spleeny',
  'spongy',
  'surly',
  'tottering',
  'unmuzzled',
  'vain',
  'venomed',
  'villainous',
  'warped',
  'wayward',
  'weedy',
  'yeasty'
]

var col2 = [
  'base-court',
  'bat-fowling',
  'beef-witted',
  'beetle-headed',
  'boil-brained',
  'clapper-clawed',
  'clay-brained',
  'common-kissing',
  'crook-pated',
  'dismal-dreaming',
  'dizzy-eyed',
  'dog-hearted',
  'dread-bolted',
  'earth-vexing',
  'elf-skinned',
  'fat-kidneyed',
  'fen-sucked',
  'flap-mouthed',
  'fly-bitten',
  'folly-fallen',
  'fool-born',
  'full-gorged',
  'guts-griping',
  'half-faced',
  'hasty-witted',
  'hedge-born',
  'hell-hated',
  'idle-headed',
  'ill-breeding',
  'ill-nurtured',
  'knotty-pated',
  'milk-livered',
  'motley-minded',
  'onion-eyed',
  'plume-plucked',
  'pottle-deep',
  'pox-marked',
  'reeling-ripe',
  'rough-hewn',
  'rude-growing',
  'rump-fed',
  'shard-borne',
  'sheep-biting',
  'spur-galled',
  'swag-bellied',
  'tardy-gaited',
  'tickle-brained',
  'toad-spotted',
  'unchin-snouted',
  'weather-bitten'
]

var col3 = [
  'apple-john',
  'baggage',
  'barnacle',
  'bladder',
  'boar-pig',
  'bugbear',
  'bum-bailey',
  'canker-blossom',
  'clack-dish',
  'clotpole',
  'coxcomb',
  'codpiece',
  'death-token',
  'dewberry',
  'flap-dragon',
  'flax-wench',
  'flirt-gill',
  'foot-licker',
  'fustilarian',
  'giglet',
  'gudgeon',
  'haggard',
  'harpy',
  'hedge-pig',
  'horn-beast',
  'hugger-mugger',
  'joithead',
  'lewdster',
  'lout',
  'maggot-pie',
  'malt-worm',
  'mammet',
  'measle',
  'minnow',
  'miscreant',
  'moldwarp',
  'mumble-news',
  'nut-hook',
  'pigeon-egg',
  'pignut',
  'puttock',
  'pumpion',
  'ratsbane',
  'scut',
  'skainsmate',
  'strumpet',
  'varlot',
  'vassal',
  'whey-face'
]


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      insult: "\"___\"",
    }
  }

  updateInsult() {
    var word1 = col1[Math.floor(Math.random() * col1.length)]
    var word2 = col2[Math.floor(Math.random() * col2.length)]
    var word3 = col3[Math.floor(Math.random() * col3.length)]

    this.setState({
      insult: "\"Thou" + " " + word1 + " " + word2 + " " + word3 + "!\"",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Shakespeare Insult Kit Online</h1>
        <div>{this.state.insult}<p></p></div>
        <Button updateInsult={this.updateInsult.bind(this)}/>
      </div>
    );
  }
}

export default App;












