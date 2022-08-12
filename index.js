import antlr from "antlr4";
import QuerySeparationGrammarLexer from "./QuerySeparationGrammarLexer.js";
import QuerySeparationGrammarParser from "./QuerySeparationGrammarParser.js";
import CustomListener from "./CustomListener.js";

export function getParser(input) {
  const chars = new antlr.InputStream(input);
  const lexer = new QuerySeparationGrammarLexer(chars);
  lexer.removeErrorListeners();
  const tokens = new antlr.CommonTokenStream(lexer);
  const parser = new QuerySeparationGrammarParser(tokens);
  parser.removeErrorListeners();
  return parser;
}

export function SplitQueries(input) {
  const chars = new antlr.InputStream(input);
  const lexer = new QuerySeparationGrammarLexer(chars);
  const tokens = new antlr.CommonTokenStream(lexer);
  const parser = new QuerySeparationGrammarParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.queriesText();

  const result = [];

  const listener = new CustomListener(result);
  antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  return listener.result;
}

// const result = SplitQueries("select * from aaa; select * from bbb;");
// console.log(result);

const result2 = SplitQueries(
  "/*aaa;bbb;ccc;ddd;eee;*/ select * from aaa; /*aaa;bbb;ccc;ddd;eee;*/ select * from bbb;"
);
console.log(result2);
