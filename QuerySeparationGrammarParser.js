// Generated from QuerySeparationGrammar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from "antlr4";
import QuerySeparationGrammarListener from "./QuerySeparationGrammarListener.js";
import QuerySeparationGrammarVisitor from "./QuerySeparationGrammarVisitor.js";

const serializedATN = [
  4, 1, 4, 30, 2, 0, 7, 0, 2, 1, 7, 1, 1, 0, 5, 0, 6, 8, 0, 10, 0, 12, 0, 9, 9,
  0, 1, 0, 1, 0, 1, 1, 5, 1, 14, 8, 1, 10, 1, 12, 1, 17, 9, 1, 1, 1, 4, 1, 20,
  8, 1, 11, 1, 12, 1, 21, 1, 1, 5, 1, 25, 8, 1, 10, 1, 12, 1, 28, 9, 1, 1, 1, 0,
  0, 2, 0, 2, 0, 1, 1, 0, 2, 4, 31, 0, 7, 1, 0, 0, 0, 2, 15, 1, 0, 0, 0, 4, 6,
  3, 2, 1, 0, 5, 4, 1, 0, 0, 0, 6, 9, 1, 0, 0, 0, 7, 5, 1, 0, 0, 0, 7, 8, 1, 0,
  0, 0, 8, 10, 1, 0, 0, 0, 9, 7, 1, 0, 0, 0, 10, 11, 5, 0, 0, 1, 11, 1, 1, 0, 0,
  0, 12, 14, 5, 1, 0, 0, 13, 12, 1, 0, 0, 0, 14, 17, 1, 0, 0, 0, 15, 13, 1, 0,
  0, 0, 15, 16, 1, 0, 0, 0, 16, 19, 1, 0, 0, 0, 17, 15, 1, 0, 0, 0, 18, 20, 7,
  0, 0, 0, 19, 18, 1, 0, 0, 0, 20, 21, 1, 0, 0, 0, 21, 19, 1, 0, 0, 0, 21, 22,
  1, 0, 0, 0, 22, 26, 1, 0, 0, 0, 23, 25, 5, 1, 0, 0, 24, 23, 1, 0, 0, 0, 25,
  28, 1, 0, 0, 0, 26, 24, 1, 0, 0, 0, 26, 27, 1, 0, 0, 0, 27, 3, 1, 0, 0, 0, 28,
  26, 1, 0, 0, 0, 4, 7, 15, 21, 26,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

const sharedContextCache = new antlr4.PredictionContextCache();

export default class QuerySeparationGrammarParser extends antlr4.Parser {
  static grammarFileName = "QuerySeparationGrammar.g4";
  static literalNames = [null, "';'"];
  static symbolicNames = [null, null, "CHAR", "STRING", "COMMENT"];
  static ruleNames = ["queriesText", "statement"];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(
      this,
      atn,
      decisionsToDFA,
      sharedContextCache
    );
    this.ruleNames = QuerySeparationGrammarParser.ruleNames;
    this.literalNames = QuerySeparationGrammarParser.literalNames;
    this.symbolicNames = QuerySeparationGrammarParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  queriesText() {
    let localctx = new QueriesTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QuerySeparationGrammarParser.RULE_queriesText);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 7;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << QuerySeparationGrammarParser.T__0) |
            (1 << QuerySeparationGrammarParser.CHAR) |
            (1 << QuerySeparationGrammarParser.STRING) |
            (1 << QuerySeparationGrammarParser.COMMENT))) !==
          0
      ) {
        this.state = 4;
        this.statement();
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 10;
      this.match(QuerySeparationGrammarParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  statement() {
    let localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QuerySeparationGrammarParser.RULE_statement);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 15;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === QuerySeparationGrammarParser.T__0) {
        this.state = 12;
        this.match(QuerySeparationGrammarParser.T__0);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 19;
      this._errHandler.sync(this);
      var _alt = 1;
      do {
        switch (_alt) {
          case 1:
            this.state = 18;
            _la = this._input.LA(1);
            if (
              !(
                (_la & ~0x1f) == 0 &&
                ((1 << _la) &
                  ((1 << QuerySeparationGrammarParser.CHAR) |
                    (1 << QuerySeparationGrammarParser.STRING) |
                    (1 << QuerySeparationGrammarParser.COMMENT))) !==
                  0
              )
            ) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 21;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
      this.state = 26;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 23;
          this.match(QuerySeparationGrammarParser.T__0);
        }
        this.state = 28;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

QuerySeparationGrammarParser.EOF = antlr4.Token.EOF;
QuerySeparationGrammarParser.T__0 = 1;
QuerySeparationGrammarParser.CHAR = 2;
QuerySeparationGrammarParser.STRING = 3;
QuerySeparationGrammarParser.COMMENT = 4;

QuerySeparationGrammarParser.RULE_queriesText = 0;
QuerySeparationGrammarParser.RULE_statement = 1;

class QueriesTextContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QuerySeparationGrammarParser.RULE_queriesText;
  }

  EOF() {
    return this.getToken(QuerySeparationGrammarParser.EOF, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof QuerySeparationGrammarListener) {
      listener.enterQueriesText(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QuerySeparationGrammarListener) {
      listener.exitQueriesText(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof QuerySeparationGrammarVisitor) {
      return visitor.visitQueriesText(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class StatementContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QuerySeparationGrammarParser.RULE_statement;
  }

  CHAR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(QuerySeparationGrammarParser.CHAR);
    } else {
      return this.getToken(QuerySeparationGrammarParser.CHAR, i);
    }
  };

  STRING = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(QuerySeparationGrammarParser.STRING);
    } else {
      return this.getToken(QuerySeparationGrammarParser.STRING, i);
    }
  };

  COMMENT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(QuerySeparationGrammarParser.COMMENT);
    } else {
      return this.getToken(QuerySeparationGrammarParser.COMMENT, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof QuerySeparationGrammarListener) {
      listener.enterStatement(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof QuerySeparationGrammarListener) {
      listener.exitStatement(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof QuerySeparationGrammarVisitor) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

QuerySeparationGrammarParser.QueriesTextContext = QueriesTextContext;
QuerySeparationGrammarParser.StatementContext = StatementContext;
