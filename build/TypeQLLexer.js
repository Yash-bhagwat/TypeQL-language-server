"use strict";
// Generated from src/TypeQL.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeQLLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class TypeQLLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return TypeQLLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(TypeQLLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "TypeQL.g4"; }
    // @Override
    get ruleNames() { return TypeQLLexer.ruleNames; }
    // @Override
    get serializedATN() { return TypeQLLexer._serializedATN; }
    // @Override
    get channelNames() { return TypeQLLexer.channelNames; }
    // @Override
    get modeNames() { return TypeQLLexer.modeNames; }
    static get _ATN() {
        if (!TypeQLLexer.__ATN) {
            TypeQLLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TypeQLLexer._serializedATN));
        }
        return TypeQLLexer.__ATN;
    }
}
exports.TypeQLLexer = TypeQLLexer;
TypeQLLexer.T__0 = 1;
TypeQLLexer.T__1 = 2;
TypeQLLexer.T__2 = 3;
TypeQLLexer.T__3 = 4;
TypeQLLexer.T__4 = 5;
TypeQLLexer.T__5 = 6;
TypeQLLexer.T__6 = 7;
TypeQLLexer.MATCH = 8;
TypeQLLexer.GET = 9;
TypeQLLexer.DEFINE = 10;
TypeQLLexer.UNDEFINE = 11;
TypeQLLexer.INSERT = 12;
TypeQLLexer.DELETE = 13;
TypeQLLexer.COMPUTE = 14;
TypeQLLexer.THING = 15;
TypeQLLexer.ENTITY = 16;
TypeQLLexer.ATTRIBUTE = 17;
TypeQLLexer.RELATION = 18;
TypeQLLexer.ROLE = 19;
TypeQLLexer.RULE = 20;
TypeQLLexer.OFFSET = 21;
TypeQLLexer.LIMIT = 22;
TypeQLLexer.SORT = 23;
TypeQLLexer.ORDER_ = 24;
TypeQLLexer.ASC = 25;
TypeQLLexer.DESC = 26;
TypeQLLexer.TYPE = 27;
TypeQLLexer.ABSTRACT = 28;
TypeQLLexer.SUB_ = 29;
TypeQLLexer.SUB = 30;
TypeQLLexer.SUBX = 31;
TypeQLLexer.OWNS = 32;
TypeQLLexer.IS_KEY = 33;
TypeQLLexer.REGEX = 34;
TypeQLLexer.AS = 35;
TypeQLLexer.PLAYS = 36;
TypeQLLexer.RELATES = 37;
TypeQLLexer.WHEN = 38;
TypeQLLexer.THEN = 39;
TypeQLLexer.IID = 40;
TypeQLLexer.ISA_ = 41;
TypeQLLexer.ISA = 42;
TypeQLLexer.ISAX = 43;
TypeQLLexer.HAS = 44;
TypeQLLexer.VALUE = 45;
TypeQLLexer.IS = 46;
TypeQLLexer.OR = 47;
TypeQLLexer.NOT = 48;
TypeQLLexer.EQ = 49;
TypeQLLexer.NEQ = 50;
TypeQLLexer.GT = 51;
TypeQLLexer.GTE = 52;
TypeQLLexer.LT = 53;
TypeQLLexer.LTE = 54;
TypeQLLexer.LIKE = 55;
TypeQLLexer.CONTAINS = 56;
TypeQLLexer.GROUP = 57;
TypeQLLexer.COUNT = 58;
TypeQLLexer.MAX = 59;
TypeQLLexer.MIN = 60;
TypeQLLexer.MEAN = 61;
TypeQLLexer.MEDIAN = 62;
TypeQLLexer.STD = 63;
TypeQLLexer.SUM = 64;
TypeQLLexer.LONG = 65;
TypeQLLexer.DOUBLE = 66;
TypeQLLexer.STRING = 67;
TypeQLLexer.BOOLEAN = 68;
TypeQLLexer.DATETIME = 69;
TypeQLLexer.BOOLEAN_ = 70;
TypeQLLexer.TRUE = 71;
TypeQLLexer.FALSE = 72;
TypeQLLexer.STRING_ = 73;
TypeQLLexer.LONG_ = 74;
TypeQLLexer.DOUBLE_ = 75;
TypeQLLexer.DATE_ = 76;
TypeQLLexer.DATETIME_ = 77;
TypeQLLexer.VAR_ = 78;
TypeQLLexer.VAR_ANONYMOUS_ = 79;
TypeQLLexer.VAR_NAMED_ = 80;
TypeQLLexer.IID_ = 81;
TypeQLLexer.LABEL_ = 82;
TypeQLLexer.LABEL_SCOPED_ = 83;
TypeQLLexer.COMMENT = 84;
TypeQLLexer.WS = 85;
TypeQLLexer.UNRECOGNISED = 86;
// tslint:disable:no-trailing-whitespace
TypeQLLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
TypeQLLexer.modeNames = [
    "DEFAULT_MODE",
];
TypeQLLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "MATCH", "GET",
    "DEFINE", "UNDEFINE", "INSERT", "DELETE", "COMPUTE", "THING", "ENTITY",
    "ATTRIBUTE", "RELATION", "ROLE", "RULE", "OFFSET", "LIMIT", "SORT", "ORDER_",
    "ASC", "DESC", "TYPE", "ABSTRACT", "SUB_", "SUB", "SUBX", "OWNS", "IS_KEY",
    "REGEX", "AS", "PLAYS", "RELATES", "WHEN", "THEN", "IID", "ISA_", "ISA",
    "ISAX", "HAS", "VALUE", "IS", "OR", "NOT", "EQ", "NEQ", "GT", "GTE", "LT",
    "LTE", "LIKE", "CONTAINS", "GROUP", "COUNT", "MAX", "MIN", "MEAN", "MEDIAN",
    "STD", "SUM", "LONG", "DOUBLE", "STRING", "BOOLEAN", "DATETIME", "BOOLEAN_",
    "TRUE", "FALSE", "STRING_", "LONG_", "DOUBLE_", "DATE_", "DATETIME_",
    "VAR_", "VAR_ANONYMOUS_", "VAR_NAMED_", "IID_", "LABEL_", "LABEL_SCOPED_",
    "TYPE_CHAR_H_", "TYPE_CHAR_T_", "DATE_FRAGMENT_", "MONTH_", "DAY_", "YEAR_",
    "TIME_", "HOUR_", "MINUTE_", "SECOND_", "SECOND_FRACTION_", "ESCAPE_SEQ_",
    "COMMENT", "WS", "UNRECOGNISED",
];
TypeQLLexer._LITERAL_NAMES = [
    undefined, "';'", "','", "'{'", "'}'", "'('", "')'", "':'", "'match'",
    "'get'", "'define'", "'undefine'", "'insert'", "'delete'", "'compute'",
    "'thing'", "'entity'", "'attribute'", "'relation'", "'role'", "'rule'",
    "'offset'", "'limit'", "'sort'", undefined, "'asc'", "'desc'", "'type'",
    "'abstract'", undefined, "'sub'", "'sub!'", "'owns'", "'@key'", "'regex'",
    "'as'", "'plays'", "'relates'", "'when'", "'then'", "'iid'", undefined,
    "'isa'", "'isa!'", "'has'", "'value'", "'is'", "'or'", "'not'", "'='",
    "'!='", "'>'", "'>='", "'<'", "'<='", "'like'", "'contains'", "'group'",
    "'count'", "'max'", "'min'", "'mean'", "'median'", "'std'", "'sum'", "'long'",
    "'double'", "'string'", "'boolean'", "'datetime'", undefined, "'true'",
    "'false'", undefined, undefined, undefined, undefined, undefined, undefined,
    "'$_'",
];
TypeQLLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "MATCH", "GET", "DEFINE", "UNDEFINE", "INSERT", "DELETE", "COMPUTE",
    "THING", "ENTITY", "ATTRIBUTE", "RELATION", "ROLE", "RULE", "OFFSET",
    "LIMIT", "SORT", "ORDER_", "ASC", "DESC", "TYPE", "ABSTRACT", "SUB_",
    "SUB", "SUBX", "OWNS", "IS_KEY", "REGEX", "AS", "PLAYS", "RELATES", "WHEN",
    "THEN", "IID", "ISA_", "ISA", "ISAX", "HAS", "VALUE", "IS", "OR", "NOT",
    "EQ", "NEQ", "GT", "GTE", "LT", "LTE", "LIKE", "CONTAINS", "GROUP", "COUNT",
    "MAX", "MIN", "MEAN", "MEDIAN", "STD", "SUM", "LONG", "DOUBLE", "STRING",
    "BOOLEAN", "DATETIME", "BOOLEAN_", "TRUE", "FALSE", "STRING_", "LONG_",
    "DOUBLE_", "DATE_", "DATETIME_", "VAR_", "VAR_ANONYMOUS_", "VAR_NAMED_",
    "IID_", "LABEL_", "LABEL_SCOPED_", "COMMENT", "WS", "UNRECOGNISED",
];
TypeQLLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TypeQLLexer._LITERAL_NAMES, TypeQLLexer._SYMBOLIC_NAMES, []);
TypeQLLexer._serializedATNSegments = 2;
TypeQLLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02X\u02D7\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
    "\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
    "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x03\x19\x03\x19\x05\x19\u0144\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u015F\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
    "\x1F\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%" +
    "\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03" +
    "\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03" +
    "*\x03*\x05*\u019B\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03" +
    "-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x030\x03" +
    "0\x030\x031\x031\x031\x031\x032\x032\x033\x033\x033\x034\x034\x035\x03" +
    "5\x035\x036\x036\x037\x037\x037\x038\x038\x038\x038\x038\x039\x039\x03" +
    "9\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03" +
    ";\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03" +
    ">\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03" +
    "@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
    "C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
    "E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03" +
    "G\x05G\u0225\nG\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03" +
    "I\x03J\x03J\x03J\x07J\u0235\nJ\fJ\x0EJ\u0238\vJ\x03J\x03J\x03J\x03J\x07" +
    "J\u023E\nJ\fJ\x0EJ\u0241\vJ\x03J\x05J\u0244\nJ\x03K\x05K\u0247\nK\x03" +
    "K\x06K\u024A\nK\rK\x0EK\u024B\x03L\x05L\u024F\nL\x03L\x06L\u0252\nL\r" +
    "L\x0EL\u0253\x03L\x03L\x06L\u0258\nL\rL\x0EL\u0259\x03M\x03M\x03N\x03" +
    "N\x03N\x03N\x03O\x03O\x05O\u0264\nO\x03P\x03P\x03P\x03Q\x03Q\x03Q\x07" +
    "Q\u026C\nQ\fQ\x0EQ\u026F\vQ\x03R\x03R\x03R\x03R\x06R\u0275\nR\rR\x0ER" +
    "\u0276\x03S\x03S\x07S\u027B\nS\fS\x0ES\u027E\vS\x03T\x03T\x03T\x03T\x03" +
    "U\x03U\x03V\x03V\x05V\u0288\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03" +
    "X\x03X\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x06Z\u029C\nZ\rZ\x0E" +
    "Z\u029D\x05Z\u02A0\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u02A9\n" +
    "[\x05[\u02AB\n[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^\x03^\x03_\x03" +
    "_\x03_\x05_\u02B9\n_\x05_\u02BB\n_\x03`\x03`\x03`\x03a\x03a\x07a\u02C2" +
    "\na\fa\x0Ea\u02C5\va\x03a\x05a\u02C8\na\x03a\x05a\u02CB\na\x03a\x03a\x03" +
    "b\x06b\u02D0\nb\rb\x0Eb\u02D1\x03b\x03b\x03c\x03c\x03\u02C3\x02\x02d\x03" +
    "\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
    "\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
    "\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
    "-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
    "=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S" +
    "\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x02" +
    "6k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02" +
    "A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02" +
    "I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02" +
    "Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7\x02U\xA9\x02\x02\xAB\x02\x02\xAD\x02" +
    "\x02\xAF\x02\x02\xB1\x02\x02\xB3\x02\x02\xB5\x02\x02\xB7\x02\x02\xB9\x02" +
    "\x02\xBB\x02\x02\xBD\x02\x02\xBF\x02\x02\xC1\x02V\xC3\x02W\xC5\x02X\x03" +
    "\x02\x11\x04\x02$$^^\x04\x02))^^\x04\x02--//\x03\x022;\x05\x022;C\\c|" +
    "\x07\x02//2;C\\aac|\x04\x022;ch\x0F\x02C\\c|\xC2\xD8\xDA\xF8\xFA\u0301" +
    "\u0372\u037F\u0381\u2001\u200E\u200F\u2072\u2191\u2C02\u2FF1\u3003\uD801" +
    "\uF902\uFDD1\uFDF2\uFFFF\b\x02//2;aa\xB9\xB9\u0302\u0371\u2041\u2042\x03" +
    "\x0223\x03\x0225\x03\x0224\x03\x0228\x03\x03\f\f\x05\x02\v\f\x0F\x0F\"" +
    "\"\x02\u02E6\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
    "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
    "\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
    "\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
    "\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
    "\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
    "\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
    "\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
    "\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
    "\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
    "\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02" +
    "\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02" +
    "O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02" +
    "\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02" +
    "\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03" +
    "\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02" +
    "\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02" +
    "q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02" +
    "\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02" +
    "\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02" +
    "\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02" +
    "\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02" +
    "\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02" +
    "\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02" +
    "\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02" +
    "\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02" +
    "\x02\xC1\x03\x02\x02\x02\x02\xC3\x03\x02\x02\x02\x02\xC5\x03\x02\x02\x02" +
    "\x03\xC7\x03\x02\x02\x02\x05\xC9\x03\x02\x02\x02\x07\xCB\x03\x02\x02\x02" +
    "\t\xCD\x03\x02\x02\x02\v\xCF\x03\x02\x02\x02\r\xD1\x03\x02\x02\x02\x0F" +
    "\xD3\x03\x02\x02\x02\x11\xD5\x03\x02\x02\x02\x13\xDB\x03\x02\x02\x02\x15" +
    "\xDF\x03\x02\x02\x02\x17\xE6\x03\x02\x02\x02\x19\xEF\x03\x02\x02\x02\x1B" +
    "\xF6\x03\x02\x02\x02\x1D\xFD\x03\x02\x02\x02\x1F\u0105\x03\x02\x02\x02" +
    "!\u010B\x03\x02\x02\x02#\u0112\x03\x02\x02\x02%\u011C\x03\x02\x02\x02" +
    "\'\u0125\x03\x02\x02\x02)\u012A\x03\x02\x02\x02+\u012F\x03\x02\x02\x02" +
    "-\u0136\x03\x02\x02\x02/\u013C\x03\x02\x02\x021\u0143\x03\x02\x02\x02" +
    "3\u0145\x03\x02\x02\x025\u0149\x03\x02\x02\x027\u014E\x03\x02\x02\x02" +
    "9\u0153\x03\x02\x02\x02;\u015E\x03\x02\x02\x02=\u0160\x03\x02\x02\x02" +
    "?\u0164\x03\x02\x02\x02A\u0169\x03\x02\x02\x02C\u016E\x03\x02\x02\x02" +
    "E\u0173\x03\x02\x02\x02G\u0179\x03\x02\x02\x02I\u017C\x03\x02\x02\x02" +
    "K\u0182\x03\x02\x02\x02M\u018A\x03\x02\x02\x02O\u018F\x03\x02\x02\x02" +
    "Q\u0194\x03\x02\x02\x02S\u019A\x03\x02\x02\x02U\u019C\x03\x02\x02\x02" +
    "W\u01A0\x03\x02\x02\x02Y\u01A5\x03\x02\x02\x02[\u01A9\x03\x02\x02\x02" +
    "]\u01AF\x03\x02\x02\x02_\u01B2\x03\x02\x02\x02a\u01B5\x03\x02\x02\x02" +
    "c\u01B9\x03\x02\x02\x02e\u01BB\x03\x02\x02\x02g\u01BE\x03\x02\x02\x02" +
    "i\u01C0\x03\x02\x02\x02k\u01C3\x03\x02\x02\x02m\u01C5\x03\x02\x02\x02" +
    "o\u01C8\x03\x02\x02\x02q\u01CD\x03\x02\x02\x02s\u01D6\x03\x02\x02\x02" +
    "u\u01DC\x03\x02\x02\x02w\u01E2\x03\x02\x02\x02y\u01E6\x03\x02\x02\x02" +
    "{\u01EA\x03\x02\x02\x02}\u01EF\x03\x02\x02\x02\x7F\u01F6\x03\x02\x02\x02" +
    "\x81\u01FA\x03\x02\x02\x02\x83\u01FE\x03\x02\x02\x02\x85\u0203\x03\x02" +
    "\x02\x02\x87\u020A\x03\x02\x02\x02\x89\u0211\x03\x02\x02\x02\x8B\u0219" +
    "\x03\x02\x02\x02\x8D\u0224\x03\x02\x02\x02\x8F\u0226\x03\x02\x02\x02\x91" +
    "\u022B\x03\x02\x02\x02\x93\u0243\x03\x02\x02\x02\x95\u0246\x03\x02\x02" +
    "\x02\x97\u024E\x03\x02\x02\x02\x99\u025B\x03\x02\x02\x02\x9B\u025D\x03" +
    "\x02\x02\x02\x9D\u0263\x03\x02\x02\x02\x9F\u0265\x03\x02\x02\x02\xA1\u0268" +
    "\x03\x02\x02\x02\xA3\u0270\x03\x02\x02\x02\xA5\u0278\x03\x02\x02\x02\xA7" +
    "\u027F\x03\x02\x02\x02\xA9\u0283\x03\x02\x02\x02\xAB\u0287\x03\x02\x02" +
    "\x02\xAD\u0289\x03\x02\x02\x02\xAF\u028F\x03\x02\x02\x02\xB1\u0292\x03" +
    "\x02\x02\x02\xB3\u029F\x03\x02\x02\x02\xB5\u02A1\x03\x02\x02\x02\xB7\u02AC" +
    "\x03\x02\x02\x02\xB9\u02AF\x03\x02\x02\x02\xBB\u02B2\x03\x02\x02\x02\xBD" +
    "\u02B5\x03\x02\x02\x02\xBF\u02BC\x03\x02\x02\x02\xC1\u02BF\x03\x02\x02" +
    "\x02\xC3\u02CF\x03\x02\x02\x02\xC5\u02D5\x03\x02\x02\x02\xC7\xC8\x07=" +
    "\x02\x02\xC8\x04\x03\x02\x02\x02\xC9\xCA\x07.\x02\x02\xCA\x06\x03\x02" +
    "\x02\x02\xCB\xCC\x07}\x02\x02\xCC\b\x03\x02\x02\x02\xCD\xCE\x07\x7F\x02" +
    "\x02\xCE\n\x03\x02\x02\x02\xCF\xD0\x07*\x02\x02\xD0\f\x03\x02\x02\x02" +
    "\xD1\xD2\x07+\x02\x02\xD2\x0E\x03\x02\x02\x02\xD3\xD4\x07<\x02\x02\xD4" +
    "\x10\x03\x02\x02\x02\xD5\xD6\x07o\x02\x02\xD6\xD7\x07c\x02\x02\xD7\xD8" +
    "\x07v\x02\x02\xD8\xD9\x07e\x02\x02\xD9\xDA\x07j\x02\x02\xDA\x12\x03\x02" +
    "\x02\x02\xDB\xDC\x07i\x02\x02\xDC\xDD\x07g\x02\x02\xDD\xDE\x07v\x02\x02" +
    "\xDE\x14\x03\x02\x02\x02\xDF\xE0\x07f\x02\x02\xE0\xE1\x07g\x02\x02\xE1" +
    "\xE2\x07h\x02\x02\xE2\xE3\x07k\x02\x02\xE3\xE4\x07p\x02\x02\xE4\xE5\x07" +
    "g\x02\x02\xE5\x16\x03\x02\x02\x02\xE6\xE7\x07w\x02\x02\xE7\xE8\x07p\x02" +
    "\x02\xE8\xE9\x07f\x02\x02\xE9\xEA\x07g\x02\x02\xEA\xEB\x07h\x02\x02\xEB" +
    "\xEC\x07k\x02\x02\xEC\xED\x07p\x02\x02\xED\xEE\x07g\x02\x02\xEE\x18\x03" +
    "\x02\x02\x02\xEF\xF0\x07k\x02\x02\xF0\xF1\x07p\x02\x02\xF1\xF2\x07u\x02" +
    "\x02\xF2\xF3\x07g\x02\x02\xF3\xF4\x07t\x02\x02\xF4\xF5\x07v\x02\x02\xF5" +
    "\x1A\x03\x02\x02\x02\xF6\xF7\x07f\x02\x02\xF7\xF8\x07g\x02\x02\xF8\xF9" +
    "\x07n\x02\x02\xF9\xFA\x07g\x02\x02\xFA\xFB\x07v\x02\x02\xFB\xFC\x07g\x02" +
    "\x02\xFC\x1C\x03\x02\x02\x02\xFD\xFE\x07e\x02\x02\xFE\xFF\x07q\x02\x02" +
    "\xFF\u0100\x07o\x02\x02\u0100\u0101\x07r\x02\x02\u0101\u0102\x07w\x02" +
    "\x02\u0102\u0103\x07v\x02\x02\u0103\u0104\x07g\x02\x02\u0104\x1E\x03\x02" +
    "\x02\x02\u0105\u0106\x07v\x02\x02\u0106\u0107\x07j\x02\x02\u0107\u0108" +
    "\x07k\x02\x02\u0108\u0109\x07p\x02\x02\u0109\u010A\x07i\x02\x02\u010A" +
    " \x03\x02\x02\x02\u010B\u010C\x07g\x02\x02\u010C\u010D\x07p\x02\x02\u010D" +
    "\u010E\x07v\x02\x02\u010E\u010F\x07k\x02\x02\u010F\u0110\x07v\x02\x02" +
    "\u0110\u0111\x07{\x02\x02\u0111\"\x03\x02\x02\x02\u0112\u0113\x07c\x02" +
    "\x02\u0113\u0114\x07v\x02\x02\u0114\u0115\x07v\x02\x02\u0115\u0116\x07" +
    "t\x02\x02\u0116\u0117\x07k\x02\x02\u0117\u0118\x07d\x02\x02\u0118\u0119" +
    "\x07w\x02\x02\u0119\u011A\x07v\x02\x02\u011A\u011B\x07g\x02\x02\u011B" +
    "$\x03\x02\x02\x02\u011C\u011D\x07t\x02\x02\u011D\u011E\x07g\x02\x02\u011E" +
    "\u011F\x07n\x02\x02\u011F\u0120\x07c\x02\x02\u0120\u0121\x07v\x02\x02" +
    "\u0121\u0122\x07k\x02\x02\u0122\u0123\x07q\x02\x02\u0123\u0124\x07p\x02" +
    "\x02\u0124&\x03\x02\x02\x02\u0125\u0126\x07t\x02\x02\u0126\u0127\x07q" +
    "\x02\x02\u0127\u0128\x07n\x02\x02\u0128\u0129\x07g\x02\x02\u0129(\x03" +
    "\x02\x02\x02\u012A\u012B\x07t\x02\x02\u012B\u012C\x07w\x02\x02\u012C\u012D" +
    "\x07n\x02\x02\u012D\u012E\x07g\x02\x02\u012E*\x03\x02\x02\x02\u012F\u0130" +
    "\x07q\x02\x02\u0130\u0131\x07h\x02\x02\u0131\u0132\x07h\x02\x02\u0132" +
    "\u0133\x07u\x02\x02\u0133\u0134\x07g\x02\x02\u0134\u0135\x07v\x02\x02" +
    "\u0135,\x03\x02\x02\x02\u0136\u0137\x07n\x02\x02\u0137\u0138\x07k\x02" +
    "\x02\u0138\u0139\x07o\x02\x02\u0139\u013A\x07k\x02\x02\u013A\u013B\x07" +
    "v\x02\x02\u013B.\x03\x02\x02\x02\u013C\u013D\x07u\x02\x02\u013D\u013E" +
    "\x07q\x02\x02\u013E\u013F\x07t\x02\x02\u013F\u0140\x07v\x02\x02\u0140" +
    "0\x03\x02\x02\x02\u0141\u0144\x053\x1A\x02\u0142\u0144\x055\x1B\x02\u0143" +
    "\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u01442\x03\x02\x02" +
    "\x02\u0145\u0146\x07c\x02\x02\u0146\u0147\x07u\x02\x02\u0147\u0148\x07" +
    "e\x02\x02\u01484\x03\x02\x02\x02\u0149\u014A\x07f\x02\x02\u014A\u014B" +
    "\x07g\x02\x02\u014B\u014C\x07u\x02\x02\u014C\u014D\x07e\x02\x02\u014D" +
    "6\x03\x02\x02\x02\u014E\u014F\x07v\x02\x02\u014F\u0150\x07{\x02\x02\u0150" +
    "\u0151\x07r\x02\x02\u0151\u0152\x07g\x02\x02\u01528\x03\x02\x02\x02\u0153" +
    "\u0154\x07c\x02\x02\u0154\u0155\x07d\x02\x02\u0155\u0156\x07u\x02\x02" +
    "\u0156\u0157\x07v\x02\x02\u0157\u0158\x07t\x02\x02\u0158\u0159\x07c\x02" +
    "\x02\u0159\u015A\x07e\x02\x02\u015A\u015B\x07v\x02\x02\u015B:\x03\x02" +
    "\x02\x02\u015C\u015F\x05=\x1F\x02\u015D\u015F\x05? \x02\u015E\u015C\x03" +
    "\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F<\x03\x02\x02\x02\u0160" +
    "\u0161\x07u\x02\x02\u0161\u0162\x07w\x02\x02\u0162\u0163\x07d\x02\x02" +
    "\u0163>\x03\x02\x02\x02\u0164\u0165\x07u\x02\x02\u0165\u0166\x07w\x02" +
    "\x02\u0166\u0167\x07d\x02\x02\u0167\u0168\x07#\x02\x02\u0168@\x03\x02" +
    "\x02\x02\u0169\u016A\x07q\x02\x02\u016A\u016B\x07y\x02\x02\u016B\u016C" +
    "\x07p\x02\x02\u016C\u016D\x07u\x02\x02\u016DB\x03\x02\x02\x02\u016E\u016F" +
    "\x07B\x02\x02\u016F\u0170\x07m\x02\x02\u0170\u0171\x07g\x02\x02\u0171" +
    "\u0172\x07{\x02\x02\u0172D\x03\x02\x02\x02\u0173\u0174\x07t\x02\x02\u0174" +
    "\u0175\x07g\x02\x02\u0175\u0176\x07i\x02\x02\u0176\u0177\x07g\x02\x02" +
    "\u0177\u0178\x07z\x02\x02\u0178F\x03\x02\x02\x02\u0179\u017A\x07c\x02" +
    "\x02\u017A\u017B\x07u\x02\x02\u017BH\x03\x02\x02\x02\u017C\u017D\x07r" +
    "\x02\x02\u017D\u017E\x07n\x02\x02\u017E\u017F\x07c\x02\x02\u017F\u0180" +
    "\x07{\x02\x02\u0180\u0181\x07u\x02\x02\u0181J\x03\x02\x02\x02\u0182\u0183" +
    "\x07t\x02\x02\u0183\u0184\x07g\x02\x02\u0184\u0185\x07n\x02\x02\u0185" +
    "\u0186\x07c\x02\x02\u0186\u0187\x07v\x02\x02\u0187\u0188\x07g\x02\x02" +
    "\u0188\u0189\x07u\x02\x02\u0189L\x03\x02\x02\x02\u018A\u018B\x07y\x02" +
    "\x02\u018B\u018C\x07j\x02\x02\u018C\u018D\x07g\x02\x02\u018D\u018E\x07" +
    "p\x02\x02\u018EN\x03\x02\x02\x02\u018F\u0190\x07v\x02\x02\u0190\u0191" +
    "\x07j\x02\x02\u0191\u0192\x07g\x02\x02\u0192\u0193\x07p\x02\x02\u0193" +
    "P\x03\x02\x02\x02\u0194\u0195\x07k\x02\x02\u0195\u0196\x07k\x02\x02\u0196" +
    "\u0197\x07f\x02\x02\u0197R\x03\x02\x02\x02\u0198\u019B\x05U+\x02\u0199" +
    "\u019B\x05W,\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02" +
    "\u019BT\x03\x02\x02\x02\u019C\u019D\x07k\x02\x02\u019D\u019E\x07u\x02" +
    "\x02\u019E\u019F\x07c\x02\x02\u019FV\x03\x02\x02\x02\u01A0\u01A1\x07k" +
    "\x02\x02\u01A1\u01A2\x07u\x02\x02\u01A2\u01A3\x07c\x02\x02\u01A3\u01A4" +
    "\x07#\x02\x02\u01A4X\x03\x02\x02\x02\u01A5\u01A6\x07j\x02\x02\u01A6\u01A7" +
    "\x07c\x02\x02\u01A7\u01A8\x07u\x02\x02\u01A8Z\x03\x02\x02\x02\u01A9\u01AA" +
    "\x07x\x02\x02\u01AA\u01AB\x07c\x02\x02\u01AB\u01AC\x07n\x02\x02\u01AC" +
    "\u01AD\x07w\x02\x02\u01AD\u01AE\x07g\x02\x02\u01AE\\\x03\x02\x02\x02\u01AF" +
    "\u01B0\x07k\x02\x02\u01B0\u01B1\x07u\x02\x02\u01B1^\x03\x02\x02\x02\u01B2" +
    "\u01B3\x07q\x02\x02\u01B3\u01B4\x07t\x02\x02\u01B4`\x03\x02\x02\x02\u01B5" +
    "\u01B6\x07p\x02\x02\u01B6\u01B7\x07q\x02\x02\u01B7\u01B8\x07v\x02\x02" +
    "\u01B8b\x03\x02\x02\x02\u01B9\u01BA\x07?\x02\x02\u01BAd\x03\x02\x02\x02" +
    "\u01BB\u01BC\x07#\x02\x02\u01BC\u01BD\x07?\x02\x02\u01BDf\x03\x02\x02" +
    "\x02\u01BE\u01BF\x07@\x02\x02\u01BFh\x03\x02\x02\x02\u01C0\u01C1\x07@" +
    "\x02\x02\u01C1\u01C2\x07?\x02\x02\u01C2j\x03\x02\x02\x02\u01C3\u01C4\x07" +
    ">\x02\x02\u01C4l\x03\x02\x02\x02\u01C5\u01C6\x07>\x02\x02\u01C6\u01C7" +
    "\x07?\x02\x02\u01C7n\x03\x02\x02\x02\u01C8\u01C9\x07n\x02\x02\u01C9\u01CA" +
    "\x07k\x02\x02\u01CA\u01CB\x07m\x02\x02\u01CB\u01CC\x07g\x02\x02\u01CC" +
    "p\x03\x02\x02\x02\u01CD\u01CE\x07e\x02\x02\u01CE\u01CF\x07q\x02\x02\u01CF" +
    "\u01D0\x07p\x02\x02\u01D0\u01D1\x07v\x02\x02\u01D1\u01D2\x07c\x02\x02" +
    "\u01D2\u01D3\x07k\x02\x02\u01D3\u01D4\x07p\x02\x02\u01D4\u01D5\x07u\x02" +
    "\x02\u01D5r\x03\x02\x02\x02\u01D6\u01D7\x07i\x02\x02\u01D7\u01D8\x07t" +
    "\x02\x02\u01D8\u01D9\x07q\x02\x02\u01D9\u01DA\x07w\x02\x02\u01DA\u01DB" +
    "\x07r\x02\x02\u01DBt\x03\x02\x02\x02\u01DC\u01DD\x07e\x02\x02\u01DD\u01DE" +
    "\x07q\x02\x02\u01DE\u01DF\x07w\x02\x02\u01DF\u01E0\x07p\x02\x02\u01E0" +
    "\u01E1\x07v\x02\x02\u01E1v\x03\x02\x02\x02\u01E2\u01E3\x07o\x02\x02\u01E3" +
    "\u01E4\x07c\x02\x02\u01E4\u01E5\x07z\x02\x02\u01E5x\x03\x02\x02\x02\u01E6" +
    "\u01E7\x07o\x02\x02\u01E7\u01E8\x07k\x02\x02\u01E8\u01E9\x07p\x02\x02" +
    "\u01E9z\x03\x02\x02\x02\u01EA\u01EB\x07o\x02\x02\u01EB\u01EC\x07g\x02" +
    "\x02\u01EC\u01ED\x07c\x02\x02\u01ED\u01EE\x07p\x02\x02\u01EE|\x03\x02" +
    "\x02\x02\u01EF\u01F0\x07o\x02\x02\u01F0\u01F1\x07g\x02\x02\u01F1\u01F2" +
    "\x07f\x02\x02\u01F2\u01F3\x07k\x02\x02\u01F3\u01F4\x07c\x02\x02\u01F4" +
    "\u01F5\x07p\x02\x02\u01F5~\x03\x02\x02\x02\u01F6\u01F7\x07u\x02\x02\u01F7" +
    "\u01F8\x07v\x02\x02\u01F8\u01F9\x07f\x02\x02\u01F9\x80\x03\x02\x02\x02" +
    "\u01FA\u01FB\x07u\x02\x02\u01FB\u01FC\x07w\x02\x02\u01FC\u01FD\x07o\x02" +
    "\x02\u01FD\x82\x03\x02\x02\x02\u01FE\u01FF\x07n\x02\x02\u01FF\u0200\x07" +
    "q\x02\x02\u0200\u0201\x07p\x02\x02\u0201\u0202\x07i\x02\x02\u0202\x84" +
    "\x03\x02\x02\x02\u0203\u0204\x07f\x02\x02\u0204\u0205\x07q\x02\x02\u0205" +
    "\u0206\x07w\x02\x02\u0206\u0207\x07d\x02\x02\u0207\u0208\x07n\x02\x02" +
    "\u0208\u0209\x07g\x02\x02\u0209\x86\x03\x02\x02\x02\u020A\u020B\x07u\x02" +
    "\x02\u020B\u020C\x07v\x02\x02\u020C\u020D\x07t\x02\x02";
TypeQLLexer._serializedATNSegment1 = "\u020D\u020E\x07k\x02\x02\u020E\u020F\x07p\x02\x02\u020F\u0210\x07i\x02" +
    "\x02\u0210\x88\x03\x02\x02\x02\u0211\u0212\x07d\x02\x02\u0212\u0213\x07" +
    "q\x02\x02\u0213\u0214\x07q\x02\x02\u0214\u0215\x07n\x02\x02\u0215\u0216" +
    "\x07g\x02\x02\u0216\u0217\x07c\x02\x02\u0217\u0218\x07p\x02\x02\u0218" +
    "\x8A\x03\x02\x02\x02\u0219\u021A\x07f\x02\x02\u021A\u021B\x07c\x02\x02" +
    "\u021B\u021C\x07v\x02\x02\u021C\u021D\x07g\x02\x02\u021D\u021E\x07v\x02" +
    "\x02\u021E\u021F\x07k\x02\x02\u021F\u0220\x07o\x02\x02\u0220\u0221\x07" +
    "g\x02\x02\u0221\x8C\x03\x02\x02\x02\u0222\u0225\x05\x8FH\x02\u0223\u0225" +
    "\x05\x91I\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0223\x03\x02\x02\x02" +
    "\u0225\x8E\x03\x02\x02\x02\u0226\u0227\x07v\x02\x02\u0227\u0228\x07t\x02" +
    "\x02\u0228\u0229\x07w\x02\x02\u0229\u022A\x07g\x02\x02\u022A\x90\x03\x02" +
    "\x02\x02\u022B\u022C\x07h\x02\x02\u022C\u022D\x07c\x02\x02\u022D\u022E" +
    "\x07n\x02\x02\u022E\u022F\x07u\x02\x02\u022F\u0230\x07g\x02\x02\u0230" +
    "\x92\x03\x02\x02\x02\u0231\u0236\x07$\x02\x02\u0232\u0235\n\x02\x02\x02" +
    "\u0233\u0235\x05\xBF`\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0233\x03" +
    "\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0236" +
    "\u0237\x03\x02\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238\u0236\x03\x02" +
    "\x02\x02\u0239\u0244\x07$\x02\x02\u023A\u023F\x07)\x02\x02\u023B\u023E" +
    "\n\x03\x02\x02\u023C\u023E\x05\xBF`\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
    "\u023C\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02" +
    "\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241" +
    "\u023F\x03\x02\x02\x02\u0242\u0244\x07)\x02\x02\u0243\u0231\x03\x02\x02" +
    "\x02\u0243\u023A\x03\x02\x02\x02\u0244\x94\x03\x02\x02\x02\u0245\u0247" +
    "\t\x04\x02\x02\u0246\u0245\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
    "\u0247\u0249\x03\x02\x02\x02\u0248\u024A\t\x05\x02\x02\u0249\u0248\x03" +
    "\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B" +
    "\u024C\x03\x02\x02\x02\u024C\x96\x03\x02\x02\x02\u024D\u024F\t\x04\x02" +
    "\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251" +
    "\x03\x02\x02\x02\u0250\u0252\t\x05\x02\x02\u0251\u0250\x03\x02\x02\x02" +
    "\u0252\u0253\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03" +
    "\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0257\x070\x02\x02\u0256" +
    "\u0258\t\x05\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02" +
    "\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\x98" +
    "\x03\x02\x02\x02\u025B\u025C\x05\xADW\x02\u025C\x9A\x03\x02\x02\x02\u025D" +
    "\u025E\x05\xADW\x02\u025E\u025F\x07V\x02\x02\u025F\u0260\x05\xB5[\x02" +
    "\u0260\x9C\x03\x02\x02\x02\u0261\u0264\x05\x9FP\x02\u0262\u0264\x05\xA1" +
    "Q\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262\x03\x02\x02\x02\u0264\x9E" +
    "\x03\x02\x02\x02\u0265\u0266\x07&\x02\x02\u0266\u0267\x07a\x02\x02\u0267" +
    "\xA0\x03\x02\x02\x02\u0268\u0269\x07&\x02\x02\u0269\u026D\t\x06\x02\x02" +
    "\u026A\u026C\t\x07\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026F\x03" +
    "\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
    "\xA2\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0271\x072\x02" +
    "\x02\u0271\u0272\x07z\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273\u0275" +
    "\t\b\x02\x02\u0274\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276" +
    "\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\xA4\x03\x02\x02" +
    "\x02\u0278\u027C\x05\xA9U\x02\u0279\u027B\x05\xABV\x02\u027A\u0279\x03" +
    "\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C" +
    "\u027D\x03\x02\x02\x02\u027D\xA6\x03\x02\x02\x02\u027E\u027C\x03\x02\x02" +
    "\x02\u027F\u0280\x05\xA5S\x02\u0280\u0281\x07<\x02\x02\u0281\u0282\x05" +
    "\xA5S\x02\u0282\xA8\x03\x02\x02\x02\u0283\u0284\t\t\x02\x02\u0284\xAA" +
    "\x03\x02\x02\x02\u0285\u0288\x05\xA9U\x02\u0286\u0288\t\n\x02\x02\u0287" +
    "\u0285\x03\x02\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\xAC\x03\x02\x02" +
    "\x02\u0289\u028A\x05\xB3Z\x02\u028A\u028B\x07/\x02\x02\u028B\u028C\x05" +
    "\xAFX\x02\u028C\u028D\x07/\x02\x02\u028D\u028E\x05\xB1Y\x02\u028E\xAE" +
    "\x03\x02\x02\x02\u028F\u0290\t\v\x02\x02\u0290\u0291\t\x05\x02\x02\u0291" +
    "\xB0\x03\x02\x02\x02\u0292\u0293\t\f\x02\x02\u0293\u0294\t\x05\x02\x02" +
    "\u0294\xB2\x03\x02\x02\x02\u0295\u0296\t\x05\x02\x02\u0296\u0297\t\x05" +
    "\x02\x02\u0297\u0298\t\x05\x02\x02\u0298\u02A0\t\x05\x02\x02\u0299\u029B" +
    "\t\x04\x02\x02\u029A\u029C\t\x05\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C" +
    "\u029D\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02" +
    "\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u0295\x03\x02\x02\x02\u029F" +
    "\u0299\x03\x02\x02\x02\u02A0\xB4\x03\x02\x02\x02\u02A1\u02A2\x05\xB7\\" +
    "\x02\u02A2\u02A3\x07<\x02\x02\u02A3\u02AA\x05\xB9]\x02\u02A4\u02A5\x07" +
    "<\x02\x02\u02A5\u02A8\x05\xBB^\x02\u02A6\u02A7\x070\x02\x02\u02A7\u02A9" +
    "\x05\xBD_\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02" +
    "\u02A9\u02AB\x03\x02\x02\x02\u02AA\u02A4\x03\x02\x02\x02\u02AA\u02AB\x03" +
    "\x02\x02\x02\u02AB\xB6\x03\x02\x02\x02\u02AC\u02AD\t\r\x02\x02\u02AD\u02AE" +
    "\t\x05\x02\x02\u02AE\xB8\x03\x02\x02\x02\u02AF\u02B0\t\x0E\x02\x02\u02B0" +
    "\u02B1\t\x05\x02\x02\u02B1\xBA\x03\x02\x02\x02\u02B2\u02B3\t\x0E\x02\x02" +
    "\u02B3\u02B4\t\x05\x02\x02\u02B4\xBC\x03\x02\x02\x02\u02B5\u02BA\t\x05" +
    "\x02\x02\u02B6\u02B8\t\x05\x02\x02\u02B7\u02B9\t\x05\x02\x02\u02B8\u02B7" +
    "\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03\x02\x02\x02" +
    "\u02BA\u02B6\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\xBE\x03" +
    "\x02\x02\x02\u02BC\u02BD\x07^\x02\x02\u02BD\u02BE\v\x02\x02\x02\u02BE" +
    "\xC0\x03\x02\x02\x02\u02BF\u02C3\x07%\x02\x02\u02C0\u02C2\v\x02\x02\x02" +
    "\u02C1\u02C0\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C4\x03" +
    "\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5" +
    "\u02C3\x03\x02\x02\x02\u02C6\u02C8\x07\x0F\x02\x02\u02C7\u02C6\x03\x02" +
    "\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9" +
    "\u02CB\t\x0F\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02" +
    "\x02\u02CC\u02CD\ba\x02\x02\u02CD\xC2\x03\x02\x02\x02\u02CE\u02D0\t\x10" +
    "\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
    "\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x03\x02" +
    "\x02\x02\u02D3\u02D4\bb\x02\x02\u02D4\xC4\x03\x02\x02\x02\u02D5\u02D6" +
    "\v\x02\x02\x02\u02D6\xC6\x03\x02\x02\x02 \x02\u0143\u015E\u019A\u0224" +
    "\u0234\u0236\u023D\u023F\u0243\u0246\u024B\u024E\u0253\u0259\u0263\u026D" +
    "\u0276\u027C\u0287\u029D\u029F\u02A8\u02AA\u02B8\u02BA\u02C3\u02C7\u02CA" +
    "\u02D1\x03\x02\x03\x02";
TypeQLLexer._serializedATN = Utils.join([
    TypeQLLexer._serializedATNSegment0,
    TypeQLLexer._serializedATNSegment1,
], "");
