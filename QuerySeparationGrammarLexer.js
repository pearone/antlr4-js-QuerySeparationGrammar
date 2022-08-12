// Generated from QuerySeparationGrammar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,59,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,5,2,22,8,2,10,2,12,2,25,9,2,
1,2,1,2,1,3,1,3,3,3,31,8,3,1,4,1,4,1,4,1,4,5,4,37,8,4,10,4,12,4,40,9,4,1,
4,3,4,43,8,4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,5,5,52,8,5,10,5,12,5,55,9,5,
1,5,1,5,1,5,1,53,0,6,1,1,3,2,5,3,7,4,9,0,11,0,1,0,3,1,0,59,59,1,0,39,39,
2,0,10,10,13,13,63,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,13,
1,0,0,0,3,15,1,0,0,0,5,17,1,0,0,0,7,30,1,0,0,0,9,32,1,0,0,0,11,47,1,0,0,
0,13,14,5,59,0,0,14,2,1,0,0,0,15,16,8,0,0,0,16,4,1,0,0,0,17,23,5,39,0,0,
18,22,8,1,0,0,19,20,5,39,0,0,20,22,5,39,0,0,21,18,1,0,0,0,21,19,1,0,0,0,
22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,
27,5,39,0,0,27,6,1,0,0,0,28,31,3,9,4,0,29,31,3,11,5,0,30,28,1,0,0,0,30,29,
1,0,0,0,31,8,1,0,0,0,32,33,5,45,0,0,33,34,5,45,0,0,34,38,1,0,0,0,35,37,8,
2,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,42,1,0,
0,0,40,38,1,0,0,0,41,43,5,13,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,
0,44,46,5,10,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,10,1,0,0,0,47,48,5,47,0,
0,48,49,5,42,0,0,49,53,1,0,0,0,50,52,9,0,0,0,51,50,1,0,0,0,52,55,1,0,0,0,
53,54,1,0,0,0,53,51,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,42,0,0,57,
58,5,47,0,0,58,12,1,0,0,0,8,0,21,23,30,38,42,45,53,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class QuerySeparationGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "QuerySeparationGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'" ];
	static symbolicNames = [ null, null, "CHAR", "STRING", "COMMENT" ];
	static ruleNames = [ "T__0", "CHAR", "STRING", "COMMENT", "SIMPLE_COMMENT", 
                      "BRACKETED_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

QuerySeparationGrammarLexer.EOF = antlr4.Token.EOF;
QuerySeparationGrammarLexer.T__0 = 1;
QuerySeparationGrammarLexer.CHAR = 2;
QuerySeparationGrammarLexer.STRING = 3;
QuerySeparationGrammarLexer.COMMENT = 4;



