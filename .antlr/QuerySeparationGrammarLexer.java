// Generated from /Users/xupengyi/58/antlr/QuerySeparationGrammar/parser/QuerySeparationGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class QuerySeparationGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, CHAR=2, STRING=3, COMMENT=4;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "CHAR", "STRING", "COMMENT", "SIMPLE_COMMENT", "BRACKETED_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "CHAR", "STRING", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public QuerySeparationGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "QuerySeparationGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\6=\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4"+
		"\7\4\30\n\4\f\4\16\4\33\13\4\3\4\3\4\3\5\3\5\5\5!\n\5\3\6\3\6\3\6\3\6"+
		"\7\6\'\n\6\f\6\16\6*\13\6\3\6\5\6-\n\6\3\6\5\6\60\n\6\3\7\3\7\3\7\3\7"+
		"\7\7\66\n\7\f\7\16\79\13\7\3\7\3\7\3\7\3\67\2\b\3\3\5\4\7\5\t\6\13\2\r"+
		"\2\3\2\5\3\2==\3\2))\4\2\f\f\17\17\2A\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2"+
		"\2\2\2\t\3\2\2\2\3\17\3\2\2\2\5\21\3\2\2\2\7\23\3\2\2\2\t \3\2\2\2\13"+
		"\"\3\2\2\2\r\61\3\2\2\2\17\20\7=\2\2\20\4\3\2\2\2\21\22\n\2\2\2\22\6\3"+
		"\2\2\2\23\31\7)\2\2\24\30\n\3\2\2\25\26\7)\2\2\26\30\7)\2\2\27\24\3\2"+
		"\2\2\27\25\3\2\2\2\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\34\3\2"+
		"\2\2\33\31\3\2\2\2\34\35\7)\2\2\35\b\3\2\2\2\36!\5\13\6\2\37!\5\r\7\2"+
		" \36\3\2\2\2 \37\3\2\2\2!\n\3\2\2\2\"#\7/\2\2#$\7/\2\2$(\3\2\2\2%\'\n"+
		"\4\2\2&%\3\2\2\2\'*\3\2\2\2(&\3\2\2\2()\3\2\2\2),\3\2\2\2*(\3\2\2\2+-"+
		"\7\17\2\2,+\3\2\2\2,-\3\2\2\2-/\3\2\2\2.\60\7\f\2\2/.\3\2\2\2/\60\3\2"+
		"\2\2\60\f\3\2\2\2\61\62\7\61\2\2\62\63\7,\2\2\63\67\3\2\2\2\64\66\13\2"+
		"\2\2\65\64\3\2\2\2\669\3\2\2\2\678\3\2\2\2\67\65\3\2\2\28:\3\2\2\29\67"+
		"\3\2\2\2:;\7,\2\2;<\7\61\2\2<\16\3\2\2\2\n\2\27\31 (,/\67\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}