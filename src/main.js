/**
 * This is an example of a rallf skill
 */
const rallf = require('rallf-js-sdk');

class SkillDemo extends rallf.Task {
  constructor() {
    super();
    this.firefox = null;
    this.chrome = null;
  }

  // Skills also can have a warmup and a cooldown
  async warmup() {
    this.logger.debug('Skill is warmed up!');
  }
  
  async cooldown() {
    this.logger.debug('Skill is cooled up!');
  }

  // method wich can be called from other tasks/skills
  // must be defined in "methods" in the manifest.json  
  async methodA(params) {
    this.logger.debug('Method A called with ', params);
    return 'MethodA Result';
  }

}
module.exports = SkillDemo;