let ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

class Warrior {
  constructor() {
    this._level = 1;
    this._experience = 100;
    this._achievements = [];
  }
  
  level() {
    this._level = Math.floor(this._experience / 100);
    return Math.min(this._level, 100);
  }
  
  rank() {
    return ranks[Math.floor(this.level()/10)];
  }
  
  experience() {
    return Math.min(this._experience, 10000);
  }
  
  achievements() {
    return this._achievements;
  }
  
  training([desc, exp, minLvl]) {
    if (this._level < minLvl) return "Not strong enough";
    this._achievements.push(desc);
    this._experience += exp;
    this._level = Math.floor(this._experience / 100);
    return desc;
  }
  
  isSameRank(lvl) {
    return Math.floor(this._level/10) === Math.floor(lvl/10);
  }
  
  getFightResult(lvl) {
    if (this._level === lvl) {
      this._experience += 10;
      return "A good fight";
    }
    else if (this._level - lvl === 1) {
      this._experience += 5;
      return "A good fight";
    }
    else if (this._level - lvl <= -5 && !this.isSameRank(lvl)) {
      return "You've been defeated";
    }
    else if (this._level < lvl) {
      this._experience += 20 * (lvl - this._level) ** 2;
      return "An intense fight";
    }
    else {
      return "Easy fight";
    }
  }
  
  battle(lvl) {
    if (lvl < 1 || lvl > 100) { return "Invalid level"; }
    let fightResult = this.getFightResult(lvl);
    this._level = Math.floor(this._experience / 100);
    return fightResult;
  }
}