import QuerySeparationGrammarListener from "./QuerySeparationGrammarListener.js";

export default class CustomListener extends QuerySeparationGrammarListener {
  constructor(result) {
    super();
    this.result = result;
  }

  exitStatement(ctx) {
    this.result.push([ctx.start.start, ctx.stop.stop]);
  }
}
