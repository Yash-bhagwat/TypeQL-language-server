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
exports.PredicateContext = exports.AttributeContext = exports.AttributesContext = exports.PlayerContext = exports.Role_playerContext = exports.RelationContext = exports.Variable_attributeContext = exports.Variable_relationContext = exports.Variable_thingContext = exports.Variable_thing_anyContext = exports.Variable_thingsContext = exports.Type_constraintContext = exports.Variable_typeContext = exports.Variable_conceptContext = exports.Pattern_variableContext = exports.Pattern_negationContext = exports.Pattern_disjunctionContext = exports.Pattern_conjunctionContext = exports.PatternContext = exports.PatternsContext = exports.DefinableContext = exports.DefinablesContext = exports.Match_groupContext = exports.Aggregate_methodContext = exports.Match_aggregateContext = exports.LimitContext = exports.OffsetContext = exports.Var_orderContext = exports.SortContext = exports.FilterContext = exports.ModifiersContext = exports.Query_match_group_aggContext = exports.Query_match_groupContext = exports.Query_match_aggregateContext = exports.Query_matchContext = exports.Query_deleteContext = exports.Query_updateContext = exports.Query_insertContext = exports.Query_undefineContext = exports.Query_defineContext = exports.QueryContext = exports.Eof_schema_ruleContext = exports.Eof_labelContext = exports.Eof_variableContext = exports.Eof_definablesContext = exports.Eof_patternsContext = exports.Eof_patternContext = exports.Eof_queriesContext = exports.Eof_queryContext = exports.TypeQLParser = void 0;
exports.UnreservedContext = exports.RegexContext = exports.ValueContext = exports.Value_typeContext = exports.Type_nativeContext = exports.Schema_nativeContext = exports.LabelContext = exports.Label_scopedContext = exports.Label_anyContext = exports.TypeContext = exports.Type_scopedContext = exports.Type_anyContext = exports.Schema_ruleContext = exports.Predicate_valueContext = exports.Predicate_substringContext = exports.Predicate_equalityContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class TypeQLParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return TypeQLParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "TypeQL.g4"; }
    // @Override
    get ruleNames() { return TypeQLParser.ruleNames; }
    // @Override
    get serializedATN() { return TypeQLParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TypeQLParser._ATN, this);
    }
    // @RuleVersion(0)
    eof_query() {
        let _localctx = new Eof_queryContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TypeQLParser.RULE_eof_query);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 130;
                this.query();
                this.state = 131;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_queries() {
        let _localctx = new Eof_queriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TypeQLParser.RULE_eof_queries);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 133;
                            this.query();
                        }
                    }
                    this.state = 136;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeQLParser.MATCH) | (1 << TypeQLParser.DEFINE) | (1 << TypeQLParser.UNDEFINE) | (1 << TypeQLParser.INSERT))) !== 0));
                this.state = 138;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_pattern() {
        let _localctx = new Eof_patternContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TypeQLParser.RULE_eof_pattern);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.pattern();
                this.state = 141;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_patterns() {
        let _localctx = new Eof_patternsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TypeQLParser.RULE_eof_patterns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.patterns();
                this.state = 144;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_definables() {
        let _localctx = new Eof_definablesContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TypeQLParser.RULE_eof_definables);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this.definables();
                this.state = 147;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_variable() {
        let _localctx = new Eof_variableContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TypeQLParser.RULE_eof_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.pattern_variable();
                this.state = 150;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_label() {
        let _localctx = new Eof_labelContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TypeQLParser.RULE_eof_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.label();
                this.state = 153;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eof_schema_rule() {
        let _localctx = new Eof_schema_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TypeQLParser.RULE_eof_schema_rule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                this.schema_rule();
                this.state = 156;
                this.match(TypeQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query() {
        let _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TypeQLParser.RULE_query);
        try {
            this.state = 167;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 158;
                        this.query_define();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 159;
                        this.query_undefine();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 160;
                        this.query_insert();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 161;
                        this.query_update();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 162;
                        this.query_delete();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 163;
                        this.query_match();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 164;
                        this.query_match_aggregate();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 165;
                        this.query_match_group();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 166;
                        this.query_match_group_agg();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_define() {
        let _localctx = new Query_defineContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TypeQLParser.RULE_query_define);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 169;
                this.match(TypeQLParser.DEFINE);
                this.state = 170;
                this.definables();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_undefine() {
        let _localctx = new Query_undefineContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TypeQLParser.RULE_query_undefine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(TypeQLParser.UNDEFINE);
                this.state = 173;
                this.definables();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_insert() {
        let _localctx = new Query_insertContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TypeQLParser.RULE_query_insert);
        try {
            this.state = 182;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.MATCH:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 175;
                        this.match(TypeQLParser.MATCH);
                        this.state = 176;
                        this.patterns();
                        this.state = 177;
                        this.match(TypeQLParser.INSERT);
                        this.state = 178;
                        this.variable_things();
                    }
                    break;
                case TypeQLParser.INSERT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 180;
                        this.match(TypeQLParser.INSERT);
                        this.state = 181;
                        this.variable_things();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_update() {
        let _localctx = new Query_updateContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TypeQLParser.RULE_query_update);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.query_delete();
                this.state = 185;
                this.match(TypeQLParser.INSERT);
                this.state = 186;
                this.variable_things();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_delete() {
        let _localctx = new Query_deleteContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TypeQLParser.RULE_query_delete);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this.match(TypeQLParser.MATCH);
                this.state = 189;
                this.patterns();
                this.state = 190;
                this.match(TypeQLParser.DELETE);
                this.state = 191;
                this.variable_things();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_match() {
        let _localctx = new Query_matchContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TypeQLParser.RULE_query_match);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(TypeQLParser.MATCH);
                this.state = 194;
                this.patterns();
                {
                    this.state = 195;
                    this.modifiers();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_match_aggregate() {
        let _localctx = new Query_match_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TypeQLParser.RULE_query_match_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.query_match();
                this.state = 198;
                this.match_aggregate();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_match_group() {
        let _localctx = new Query_match_groupContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TypeQLParser.RULE_query_match_group);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.query_match();
                this.state = 201;
                this.match_group();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query_match_group_agg() {
        let _localctx = new Query_match_group_aggContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TypeQLParser.RULE_query_match_group_agg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.query_match();
                this.state = 204;
                this.match_group();
                this.state = 205;
                this.match_aggregate();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modifiers() {
        let _localctx = new ModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TypeQLParser.RULE_modifiers);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.GET) {
                    {
                        this.state = 207;
                        this.filter();
                        this.state = 208;
                        this.match(TypeQLParser.T__0);
                    }
                }
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.SORT) {
                    {
                        this.state = 212;
                        this.sort();
                        this.state = 213;
                        this.match(TypeQLParser.T__0);
                    }
                }
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.OFFSET) {
                    {
                        this.state = 217;
                        this.offset();
                        this.state = 218;
                        this.match(TypeQLParser.T__0);
                    }
                }
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.LIMIT) {
                    {
                        this.state = 222;
                        this.limit();
                        this.state = 223;
                        this.match(TypeQLParser.T__0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    filter() {
        let _localctx = new FilterContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, TypeQLParser.RULE_filter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.match(TypeQLParser.GET);
                this.state = 228;
                this.match(TypeQLParser.VAR_);
                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeQLParser.T__1) {
                    {
                        {
                            this.state = 229;
                            this.match(TypeQLParser.T__1);
                            this.state = 230;
                            this.match(TypeQLParser.VAR_);
                        }
                    }
                    this.state = 235;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sort() {
        let _localctx = new SortContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TypeQLParser.RULE_sort);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(TypeQLParser.SORT);
                this.state = 237;
                this.var_order();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeQLParser.T__1) {
                    {
                        {
                            this.state = 238;
                            this.match(TypeQLParser.T__1);
                            this.state = 239;
                            this.var_order();
                        }
                    }
                    this.state = 244;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    var_order() {
        let _localctx = new Var_orderContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, TypeQLParser.RULE_var_order);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this.match(TypeQLParser.VAR_);
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.ORDER_) {
                    {
                        this.state = 246;
                        this.match(TypeQLParser.ORDER_);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    offset() {
        let _localctx = new OffsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TypeQLParser.RULE_offset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.match(TypeQLParser.OFFSET);
                this.state = 250;
                this.match(TypeQLParser.LONG_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    limit() {
        let _localctx = new LimitContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, TypeQLParser.RULE_limit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.match(TypeQLParser.LIMIT);
                this.state = 253;
                this.match(TypeQLParser.LONG_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    match_aggregate() {
        let _localctx = new Match_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, TypeQLParser.RULE_match_aggregate);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.aggregate_method();
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TypeQLParser.VAR_) {
                    {
                        this.state = 256;
                        this.match(TypeQLParser.VAR_);
                    }
                }
                this.state = 259;
                this.match(TypeQLParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_method() {
        let _localctx = new Aggregate_methodContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, TypeQLParser.RULE_aggregate_method);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                _la = this._input.LA(1);
                if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (TypeQLParser.COUNT - 58)) | (1 << (TypeQLParser.MAX - 58)) | (1 << (TypeQLParser.MIN - 58)) | (1 << (TypeQLParser.MEAN - 58)) | (1 << (TypeQLParser.MEDIAN - 58)) | (1 << (TypeQLParser.STD - 58)) | (1 << (TypeQLParser.SUM - 58)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    match_group() {
        let _localctx = new Match_groupContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, TypeQLParser.RULE_match_group);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.match(TypeQLParser.GROUP);
                this.state = 264;
                this.match(TypeQLParser.VAR_);
                this.state = 265;
                this.match(TypeQLParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definables() {
        let _localctx = new DefinablesContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, TypeQLParser.RULE_definables);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 267;
                            this.definable();
                            this.state = 268;
                            this.match(TypeQLParser.T__0);
                        }
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeQLParser.GET) | (1 << TypeQLParser.THING) | (1 << TypeQLParser.ENTITY) | (1 << TypeQLParser.ATTRIBUTE) | (1 << TypeQLParser.RELATION) | (1 << TypeQLParser.ROLE) | (1 << TypeQLParser.RULE) | (1 << TypeQLParser.OFFSET) | (1 << TypeQLParser.LIMIT) | (1 << TypeQLParser.SORT))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (TypeQLParser.VALUE - 45)) | (1 << (TypeQLParser.CONTAINS - 45)) | (1 << (TypeQLParser.GROUP - 45)) | (1 << (TypeQLParser.COUNT - 45)) | (1 << (TypeQLParser.MAX - 45)) | (1 << (TypeQLParser.MIN - 45)) | (1 << (TypeQLParser.MEAN - 45)) | (1 << (TypeQLParser.MEDIAN - 45)) | (1 << (TypeQLParser.STD - 45)) | (1 << (TypeQLParser.SUM - 45)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (TypeQLParser.VAR_ - 78)) | (1 << (TypeQLParser.LABEL_ - 78)) | (1 << (TypeQLParser.LABEL_SCOPED_ - 78)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definable() {
        let _localctx = new DefinableContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, TypeQLParser.RULE_definable);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 274;
                        this.variable_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 275;
                        this.schema_rule();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    patterns() {
        let _localctx = new PatternsContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, TypeQLParser.RULE_patterns);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 278;
                                    this.pattern();
                                    this.state = 279;
                                    this.match(TypeQLParser.T__0);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 283;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern() {
        let _localctx = new PatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TypeQLParser.RULE_pattern);
        try {
            this.state = 289;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 285;
                        this.pattern_variable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 286;
                        this.pattern_conjunction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 287;
                        this.pattern_disjunction();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 288;
                        this.pattern_negation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern_conjunction() {
        let _localctx = new Pattern_conjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, TypeQLParser.RULE_pattern_conjunction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(TypeQLParser.T__2);
                this.state = 292;
                this.patterns();
                this.state = 293;
                this.match(TypeQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern_disjunction() {
        let _localctx = new Pattern_disjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, TypeQLParser.RULE_pattern_disjunction);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this.match(TypeQLParser.T__2);
                this.state = 296;
                this.patterns();
                this.state = 297;
                this.match(TypeQLParser.T__3);
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 298;
                            this.match(TypeQLParser.OR);
                            this.state = 299;
                            this.match(TypeQLParser.T__2);
                            this.state = 300;
                            this.patterns();
                            this.state = 301;
                            this.match(TypeQLParser.T__3);
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TypeQLParser.OR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern_negation() {
        let _localctx = new Pattern_negationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, TypeQLParser.RULE_pattern_negation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(TypeQLParser.NOT);
                this.state = 308;
                this.match(TypeQLParser.T__2);
                this.state = 309;
                this.patterns();
                this.state = 310;
                this.match(TypeQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern_variable() {
        let _localctx = new Pattern_variableContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TypeQLParser.RULE_pattern_variable);
        try {
            this.state = 315;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 312;
                        this.variable_concept();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 313;
                        this.variable_type();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 314;
                        this.variable_thing_any();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_concept() {
        let _localctx = new Variable_conceptContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TypeQLParser.RULE_variable_concept);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this.match(TypeQLParser.VAR_);
                this.state = 318;
                this.match(TypeQLParser.IS);
                this.state = 319;
                this.match(TypeQLParser.VAR_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_type() {
        let _localctx = new Variable_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, TypeQLParser.RULE_variable_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.type_any();
                this.state = 322;
                this.type_constraint();
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeQLParser.T__1) {
                    {
                        {
                            this.state = 323;
                            this.match(TypeQLParser.T__1);
                            this.state = 324;
                            this.type_constraint();
                        }
                    }
                    this.state = 329;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_constraint() {
        let _localctx = new Type_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TypeQLParser.RULE_type_constraint);
        let _la;
        try {
            this.state = 360;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 330;
                        this.match(TypeQLParser.ABSTRACT);
                    }
                    break;
                case TypeQLParser.SUB_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 331;
                        this.match(TypeQLParser.SUB_);
                        this.state = 332;
                        this.type_any();
                    }
                    break;
                case TypeQLParser.OWNS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 333;
                        this.match(TypeQLParser.OWNS);
                        this.state = 334;
                        this.type();
                        this.state = 337;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.AS) {
                            {
                                this.state = 335;
                                this.match(TypeQLParser.AS);
                                this.state = 336;
                                this.type();
                            }
                        }
                        this.state = 340;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.IS_KEY) {
                            {
                                this.state = 339;
                                this.match(TypeQLParser.IS_KEY);
                            }
                        }
                    }
                    break;
                case TypeQLParser.RELATES:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 342;
                        this.match(TypeQLParser.RELATES);
                        this.state = 343;
                        this.type();
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.AS) {
                            {
                                this.state = 344;
                                this.match(TypeQLParser.AS);
                                this.state = 345;
                                this.type();
                            }
                        }
                    }
                    break;
                case TypeQLParser.PLAYS:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 348;
                        this.match(TypeQLParser.PLAYS);
                        this.state = 349;
                        this.type_scoped();
                        this.state = 352;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.AS) {
                            {
                                this.state = 350;
                                this.match(TypeQLParser.AS);
                                this.state = 351;
                                this.type();
                            }
                        }
                    }
                    break;
                case TypeQLParser.VALUE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 354;
                        this.match(TypeQLParser.VALUE);
                        this.state = 355;
                        this.value_type();
                    }
                    break;
                case TypeQLParser.REGEX:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 356;
                        this.match(TypeQLParser.REGEX);
                        this.state = 357;
                        this.match(TypeQLParser.STRING_);
                    }
                    break;
                case TypeQLParser.TYPE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 358;
                        this.match(TypeQLParser.TYPE);
                        this.state = 359;
                        this.label_any();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_things() {
        let _localctx = new Variable_thingsContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, TypeQLParser.RULE_variable_things);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 362;
                            this.variable_thing_any();
                            this.state = 363;
                            this.match(TypeQLParser.T__0);
                        }
                    }
                    this.state = 367;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TypeQLParser.T__4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (TypeQLParser.EQ - 49)) | (1 << (TypeQLParser.NEQ - 49)) | (1 << (TypeQLParser.GT - 49)) | (1 << (TypeQLParser.GTE - 49)) | (1 << (TypeQLParser.LT - 49)) | (1 << (TypeQLParser.LTE - 49)) | (1 << (TypeQLParser.LIKE - 49)) | (1 << (TypeQLParser.CONTAINS - 49)) | (1 << (TypeQLParser.BOOLEAN_ - 49)) | (1 << (TypeQLParser.STRING_ - 49)) | (1 << (TypeQLParser.LONG_ - 49)) | (1 << (TypeQLParser.DOUBLE_ - 49)) | (1 << (TypeQLParser.DATE_ - 49)) | (1 << (TypeQLParser.DATETIME_ - 49)) | (1 << (TypeQLParser.VAR_ - 49)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_thing_any() {
        let _localctx = new Variable_thing_anyContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, TypeQLParser.RULE_variable_thing_any);
        try {
            this.state = 372;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 369;
                        this.variable_thing();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 370;
                        this.variable_relation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 371;
                        this.variable_attribute();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_thing() {
        let _localctx = new Variable_thingContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, TypeQLParser.RULE_variable_thing);
        let _la;
        try {
            this.state = 390;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 374;
                        this.match(TypeQLParser.VAR_);
                        this.state = 375;
                        this.match(TypeQLParser.ISA_);
                        this.state = 376;
                        this.type();
                        this.state = 379;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.T__1) {
                            {
                                this.state = 377;
                                this.match(TypeQLParser.T__1);
                                this.state = 378;
                                this.attributes();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 381;
                        this.match(TypeQLParser.VAR_);
                        this.state = 382;
                        this.match(TypeQLParser.IID);
                        this.state = 383;
                        this.match(TypeQLParser.IID_);
                        this.state = 386;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.T__1) {
                            {
                                this.state = 384;
                                this.match(TypeQLParser.T__1);
                                this.state = 385;
                                this.attributes();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 388;
                        this.match(TypeQLParser.VAR_);
                        this.state = 389;
                        this.attributes();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_relation() {
        let _localctx = new Variable_relationContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, TypeQLParser.RULE_variable_relation);
        let _la;
        try {
            this.state = 409;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 393;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.VAR_) {
                            {
                                this.state = 392;
                                this.match(TypeQLParser.VAR_);
                            }
                        }
                        this.state = 395;
                        this.relation();
                        this.state = 396;
                        this.match(TypeQLParser.ISA_);
                        this.state = 397;
                        this.type();
                        this.state = 400;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.T__1) {
                            {
                                this.state = 398;
                                this.match(TypeQLParser.T__1);
                                this.state = 399;
                                this.attributes();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 403;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.VAR_) {
                            {
                                this.state = 402;
                                this.match(TypeQLParser.VAR_);
                            }
                        }
                        this.state = 405;
                        this.relation();
                        this.state = 407;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.HAS) {
                            {
                                this.state = 406;
                                this.attributes();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_attribute() {
        let _localctx = new Variable_attributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, TypeQLParser.RULE_variable_attribute);
        let _la;
        try {
            this.state = 428;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 412;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.VAR_) {
                            {
                                this.state = 411;
                                this.match(TypeQLParser.VAR_);
                            }
                        }
                        this.state = 414;
                        this.predicate();
                        this.state = 415;
                        this.match(TypeQLParser.ISA_);
                        this.state = 416;
                        this.type();
                        this.state = 419;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.T__1) {
                            {
                                this.state = 417;
                                this.match(TypeQLParser.T__1);
                                this.state = 418;
                                this.attributes();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 422;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.VAR_) {
                            {
                                this.state = 421;
                                this.match(TypeQLParser.VAR_);
                            }
                        }
                        this.state = 424;
                        this.predicate();
                        this.state = 426;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TypeQLParser.HAS) {
                            {
                                this.state = 425;
                                this.attributes();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relation() {
        let _localctx = new RelationContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, TypeQLParser.RULE_relation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.match(TypeQLParser.T__4);
                this.state = 431;
                this.role_player();
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeQLParser.T__1) {
                    {
                        {
                            this.state = 432;
                            this.match(TypeQLParser.T__1);
                            this.state = 433;
                            this.role_player();
                        }
                    }
                    this.state = 438;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 439;
                this.match(TypeQLParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    role_player() {
        let _localctx = new Role_playerContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, TypeQLParser.RULE_role_player);
        try {
            this.state = 446;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 441;
                        this.type();
                        this.state = 442;
                        this.match(TypeQLParser.T__6);
                        this.state = 443;
                        this.player();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 445;
                        this.player();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    player() {
        let _localctx = new PlayerContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, TypeQLParser.RULE_player);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 448;
                this.match(TypeQLParser.VAR_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    attributes() {
        let _localctx = new AttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, TypeQLParser.RULE_attributes);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.attribute();
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypeQLParser.T__1) {
                    {
                        {
                            this.state = 451;
                            this.match(TypeQLParser.T__1);
                            this.state = 452;
                            this.attribute();
                        }
                    }
                    this.state = 457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    attribute() {
        let _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, TypeQLParser.RULE_attribute);
        try {
            this.state = 466;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 458;
                        this.match(TypeQLParser.HAS);
                        this.state = 459;
                        this.label();
                        this.state = 462;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case TypeQLParser.VAR_:
                                {
                                    this.state = 460;
                                    this.match(TypeQLParser.VAR_);
                                }
                                break;
                            case TypeQLParser.EQ:
                            case TypeQLParser.NEQ:
                            case TypeQLParser.GT:
                            case TypeQLParser.GTE:
                            case TypeQLParser.LT:
                            case TypeQLParser.LTE:
                            case TypeQLParser.LIKE:
                            case TypeQLParser.CONTAINS:
                            case TypeQLParser.BOOLEAN_:
                            case TypeQLParser.STRING_:
                            case TypeQLParser.LONG_:
                            case TypeQLParser.DOUBLE_:
                            case TypeQLParser.DATE_:
                            case TypeQLParser.DATETIME_:
                                {
                                    this.state = 461;
                                    this.predicate();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 464;
                        this.match(TypeQLParser.HAS);
                        this.state = 465;
                        this.match(TypeQLParser.VAR_);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    predicate() {
        let _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, TypeQLParser.RULE_predicate);
        try {
            this.state = 475;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.BOOLEAN_:
                case TypeQLParser.STRING_:
                case TypeQLParser.LONG_:
                case TypeQLParser.DOUBLE_:
                case TypeQLParser.DATE_:
                case TypeQLParser.DATETIME_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 468;
                        this.value();
                    }
                    break;
                case TypeQLParser.EQ:
                case TypeQLParser.NEQ:
                case TypeQLParser.GT:
                case TypeQLParser.GTE:
                case TypeQLParser.LT:
                case TypeQLParser.LTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 469;
                        this.predicate_equality();
                        this.state = 470;
                        this.predicate_value();
                    }
                    break;
                case TypeQLParser.LIKE:
                case TypeQLParser.CONTAINS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 472;
                        this.predicate_substring();
                        this.state = 473;
                        this.match(TypeQLParser.STRING_);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    predicate_equality() {
        let _localctx = new Predicate_equalityContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, TypeQLParser.RULE_predicate_equality);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 477;
                _la = this._input.LA(1);
                if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (TypeQLParser.EQ - 49)) | (1 << (TypeQLParser.NEQ - 49)) | (1 << (TypeQLParser.GT - 49)) | (1 << (TypeQLParser.GTE - 49)) | (1 << (TypeQLParser.LT - 49)) | (1 << (TypeQLParser.LTE - 49)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    predicate_substring() {
        let _localctx = new Predicate_substringContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, TypeQLParser.RULE_predicate_substring);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                _la = this._input.LA(1);
                if (!(_la === TypeQLParser.LIKE || _la === TypeQLParser.CONTAINS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    predicate_value() {
        let _localctx = new Predicate_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, TypeQLParser.RULE_predicate_value);
        try {
            this.state = 483;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.BOOLEAN_:
                case TypeQLParser.STRING_:
                case TypeQLParser.LONG_:
                case TypeQLParser.DOUBLE_:
                case TypeQLParser.DATE_:
                case TypeQLParser.DATETIME_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 481;
                        this.value();
                    }
                    break;
                case TypeQLParser.VAR_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 482;
                        this.match(TypeQLParser.VAR_);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_rule() {
        let _localctx = new Schema_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, TypeQLParser.RULE_schema_rule);
        try {
            this.state = 500;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 485;
                        this.match(TypeQLParser.RULE);
                        this.state = 486;
                        this.label();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 487;
                        this.match(TypeQLParser.RULE);
                        this.state = 488;
                        this.label();
                        this.state = 489;
                        this.match(TypeQLParser.T__6);
                        this.state = 490;
                        this.match(TypeQLParser.WHEN);
                        this.state = 491;
                        this.match(TypeQLParser.T__2);
                        this.state = 492;
                        this.patterns();
                        this.state = 493;
                        this.match(TypeQLParser.T__3);
                        this.state = 494;
                        this.match(TypeQLParser.THEN);
                        this.state = 495;
                        this.match(TypeQLParser.T__2);
                        this.state = 496;
                        this.variable_thing_any();
                        this.state = 497;
                        this.match(TypeQLParser.T__0);
                        this.state = 498;
                        this.match(TypeQLParser.T__3);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_any() {
        let _localctx = new Type_anyContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, TypeQLParser.RULE_type_any);
        try {
            this.state = 505;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 502;
                        this.type_scoped();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 503;
                        this.type();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 504;
                        this.match(TypeQLParser.VAR_);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_scoped() {
        let _localctx = new Type_scopedContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, TypeQLParser.RULE_type_scoped);
        try {
            this.state = 509;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.LABEL_SCOPED_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 507;
                        this.label_scoped();
                    }
                    break;
                case TypeQLParser.VAR_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 508;
                        this.match(TypeQLParser.VAR_);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, TypeQLParser.RULE_type);
        try {
            this.state = 513;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.GET:
                case TypeQLParser.THING:
                case TypeQLParser.ENTITY:
                case TypeQLParser.ATTRIBUTE:
                case TypeQLParser.RELATION:
                case TypeQLParser.ROLE:
                case TypeQLParser.RULE:
                case TypeQLParser.OFFSET:
                case TypeQLParser.LIMIT:
                case TypeQLParser.SORT:
                case TypeQLParser.VALUE:
                case TypeQLParser.CONTAINS:
                case TypeQLParser.GROUP:
                case TypeQLParser.COUNT:
                case TypeQLParser.MAX:
                case TypeQLParser.MIN:
                case TypeQLParser.MEAN:
                case TypeQLParser.MEDIAN:
                case TypeQLParser.STD:
                case TypeQLParser.SUM:
                case TypeQLParser.LABEL_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.label();
                    }
                    break;
                case TypeQLParser.VAR_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 512;
                        this.match(TypeQLParser.VAR_);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    label_any() {
        let _localctx = new Label_anyContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, TypeQLParser.RULE_label_any);
        try {
            this.state = 517;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.LABEL_SCOPED_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 515;
                        this.label_scoped();
                    }
                    break;
                case TypeQLParser.GET:
                case TypeQLParser.THING:
                case TypeQLParser.ENTITY:
                case TypeQLParser.ATTRIBUTE:
                case TypeQLParser.RELATION:
                case TypeQLParser.ROLE:
                case TypeQLParser.RULE:
                case TypeQLParser.OFFSET:
                case TypeQLParser.LIMIT:
                case TypeQLParser.SORT:
                case TypeQLParser.VALUE:
                case TypeQLParser.CONTAINS:
                case TypeQLParser.GROUP:
                case TypeQLParser.COUNT:
                case TypeQLParser.MAX:
                case TypeQLParser.MIN:
                case TypeQLParser.MEAN:
                case TypeQLParser.MEDIAN:
                case TypeQLParser.STD:
                case TypeQLParser.SUM:
                case TypeQLParser.LABEL_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 516;
                        this.label();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    label_scoped() {
        let _localctx = new Label_scopedContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, TypeQLParser.RULE_label_scoped);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                this.match(TypeQLParser.LABEL_SCOPED_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    label() {
        let _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, TypeQLParser.RULE_label);
        try {
            this.state = 525;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypeQLParser.LABEL_:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 521;
                        this.match(TypeQLParser.LABEL_);
                    }
                    break;
                case TypeQLParser.RULE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 522;
                        this.schema_native();
                    }
                    break;
                case TypeQLParser.THING:
                case TypeQLParser.ENTITY:
                case TypeQLParser.ATTRIBUTE:
                case TypeQLParser.RELATION:
                case TypeQLParser.ROLE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 523;
                        this.type_native();
                    }
                    break;
                case TypeQLParser.GET:
                case TypeQLParser.OFFSET:
                case TypeQLParser.LIMIT:
                case TypeQLParser.SORT:
                case TypeQLParser.VALUE:
                case TypeQLParser.CONTAINS:
                case TypeQLParser.GROUP:
                case TypeQLParser.COUNT:
                case TypeQLParser.MAX:
                case TypeQLParser.MIN:
                case TypeQLParser.MEAN:
                case TypeQLParser.MEDIAN:
                case TypeQLParser.STD:
                case TypeQLParser.SUM:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 524;
                        this.unreserved();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_native() {
        let _localctx = new Schema_nativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, TypeQLParser.RULE_schema_native);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this.match(TypeQLParser.RULE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_native() {
        let _localctx = new Type_nativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, TypeQLParser.RULE_type_native);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeQLParser.THING) | (1 << TypeQLParser.ENTITY) | (1 << TypeQLParser.ATTRIBUTE) | (1 << TypeQLParser.RELATION) | (1 << TypeQLParser.ROLE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value_type() {
        let _localctx = new Value_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, TypeQLParser.RULE_value_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                _la = this._input.LA(1);
                if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TypeQLParser.LONG - 65)) | (1 << (TypeQLParser.DOUBLE - 65)) | (1 << (TypeQLParser.STRING - 65)) | (1 << (TypeQLParser.BOOLEAN - 65)) | (1 << (TypeQLParser.DATETIME - 65)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, TypeQLParser.RULE_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 533;
                _la = this._input.LA(1);
                if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (TypeQLParser.BOOLEAN_ - 70)) | (1 << (TypeQLParser.STRING_ - 70)) | (1 << (TypeQLParser.LONG_ - 70)) | (1 << (TypeQLParser.DOUBLE_ - 70)) | (1 << (TypeQLParser.DATE_ - 70)) | (1 << (TypeQLParser.DATETIME_ - 70)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    regex() {
        let _localctx = new RegexContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, TypeQLParser.RULE_regex);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 535;
                this.match(TypeQLParser.STRING_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unreserved() {
        let _localctx = new UnreservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, TypeQLParser.RULE_unreserved);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 537;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TypeQLParser.GET) | (1 << TypeQLParser.OFFSET) | (1 << TypeQLParser.LIMIT) | (1 << TypeQLParser.SORT))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (TypeQLParser.VALUE - 45)) | (1 << (TypeQLParser.CONTAINS - 45)) | (1 << (TypeQLParser.GROUP - 45)) | (1 << (TypeQLParser.COUNT - 45)) | (1 << (TypeQLParser.MAX - 45)) | (1 << (TypeQLParser.MIN - 45)) | (1 << (TypeQLParser.MEAN - 45)) | (1 << (TypeQLParser.MEDIAN - 45)) | (1 << (TypeQLParser.STD - 45)) | (1 << (TypeQLParser.SUM - 45)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!TypeQLParser.__ATN) {
            TypeQLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TypeQLParser._serializedATN));
        }
        return TypeQLParser.__ATN;
    }
}
exports.TypeQLParser = TypeQLParser;
TypeQLParser.T__0 = 1;
TypeQLParser.T__1 = 2;
TypeQLParser.T__2 = 3;
TypeQLParser.T__3 = 4;
TypeQLParser.T__4 = 5;
TypeQLParser.T__5 = 6;
TypeQLParser.T__6 = 7;
TypeQLParser.MATCH = 8;
TypeQLParser.GET = 9;
TypeQLParser.DEFINE = 10;
TypeQLParser.UNDEFINE = 11;
TypeQLParser.INSERT = 12;
TypeQLParser.DELETE = 13;
TypeQLParser.COMPUTE = 14;
TypeQLParser.THING = 15;
TypeQLParser.ENTITY = 16;
TypeQLParser.ATTRIBUTE = 17;
TypeQLParser.RELATION = 18;
TypeQLParser.ROLE = 19;
TypeQLParser.RULE = 20;
TypeQLParser.OFFSET = 21;
TypeQLParser.LIMIT = 22;
TypeQLParser.SORT = 23;
TypeQLParser.ORDER_ = 24;
TypeQLParser.ASC = 25;
TypeQLParser.DESC = 26;
TypeQLParser.TYPE = 27;
TypeQLParser.ABSTRACT = 28;
TypeQLParser.SUB_ = 29;
TypeQLParser.SUB = 30;
TypeQLParser.SUBX = 31;
TypeQLParser.OWNS = 32;
TypeQLParser.IS_KEY = 33;
TypeQLParser.REGEX = 34;
TypeQLParser.AS = 35;
TypeQLParser.PLAYS = 36;
TypeQLParser.RELATES = 37;
TypeQLParser.WHEN = 38;
TypeQLParser.THEN = 39;
TypeQLParser.IID = 40;
TypeQLParser.ISA_ = 41;
TypeQLParser.ISA = 42;
TypeQLParser.ISAX = 43;
TypeQLParser.HAS = 44;
TypeQLParser.VALUE = 45;
TypeQLParser.IS = 46;
TypeQLParser.OR = 47;
TypeQLParser.NOT = 48;
TypeQLParser.EQ = 49;
TypeQLParser.NEQ = 50;
TypeQLParser.GT = 51;
TypeQLParser.GTE = 52;
TypeQLParser.LT = 53;
TypeQLParser.LTE = 54;
TypeQLParser.LIKE = 55;
TypeQLParser.CONTAINS = 56;
TypeQLParser.GROUP = 57;
TypeQLParser.COUNT = 58;
TypeQLParser.MAX = 59;
TypeQLParser.MIN = 60;
TypeQLParser.MEAN = 61;
TypeQLParser.MEDIAN = 62;
TypeQLParser.STD = 63;
TypeQLParser.SUM = 64;
TypeQLParser.LONG = 65;
TypeQLParser.DOUBLE = 66;
TypeQLParser.STRING = 67;
TypeQLParser.BOOLEAN = 68;
TypeQLParser.DATETIME = 69;
TypeQLParser.BOOLEAN_ = 70;
TypeQLParser.TRUE = 71;
TypeQLParser.FALSE = 72;
TypeQLParser.STRING_ = 73;
TypeQLParser.LONG_ = 74;
TypeQLParser.DOUBLE_ = 75;
TypeQLParser.DATE_ = 76;
TypeQLParser.DATETIME_ = 77;
TypeQLParser.VAR_ = 78;
TypeQLParser.VAR_ANONYMOUS_ = 79;
TypeQLParser.VAR_NAMED_ = 80;
TypeQLParser.IID_ = 81;
TypeQLParser.LABEL_ = 82;
TypeQLParser.LABEL_SCOPED_ = 83;
TypeQLParser.COMMENT = 84;
TypeQLParser.WS = 85;
TypeQLParser.UNRECOGNISED = 86;
TypeQLParser.RULE_eof_query = 0;
TypeQLParser.RULE_eof_queries = 1;
TypeQLParser.RULE_eof_pattern = 2;
TypeQLParser.RULE_eof_patterns = 3;
TypeQLParser.RULE_eof_definables = 4;
TypeQLParser.RULE_eof_variable = 5;
TypeQLParser.RULE_eof_label = 6;
TypeQLParser.RULE_eof_schema_rule = 7;
TypeQLParser.RULE_query = 8;
TypeQLParser.RULE_query_define = 9;
TypeQLParser.RULE_query_undefine = 10;
TypeQLParser.RULE_query_insert = 11;
TypeQLParser.RULE_query_update = 12;
TypeQLParser.RULE_query_delete = 13;
TypeQLParser.RULE_query_match = 14;
TypeQLParser.RULE_query_match_aggregate = 15;
TypeQLParser.RULE_query_match_group = 16;
TypeQLParser.RULE_query_match_group_agg = 17;
TypeQLParser.RULE_modifiers = 18;
TypeQLParser.RULE_filter = 19;
TypeQLParser.RULE_sort = 20;
TypeQLParser.RULE_var_order = 21;
TypeQLParser.RULE_offset = 22;
TypeQLParser.RULE_limit = 23;
TypeQLParser.RULE_match_aggregate = 24;
TypeQLParser.RULE_aggregate_method = 25;
TypeQLParser.RULE_match_group = 26;
TypeQLParser.RULE_definables = 27;
TypeQLParser.RULE_definable = 28;
TypeQLParser.RULE_patterns = 29;
TypeQLParser.RULE_pattern = 30;
TypeQLParser.RULE_pattern_conjunction = 31;
TypeQLParser.RULE_pattern_disjunction = 32;
TypeQLParser.RULE_pattern_negation = 33;
TypeQLParser.RULE_pattern_variable = 34;
TypeQLParser.RULE_variable_concept = 35;
TypeQLParser.RULE_variable_type = 36;
TypeQLParser.RULE_type_constraint = 37;
TypeQLParser.RULE_variable_things = 38;
TypeQLParser.RULE_variable_thing_any = 39;
TypeQLParser.RULE_variable_thing = 40;
TypeQLParser.RULE_variable_relation = 41;
TypeQLParser.RULE_variable_attribute = 42;
TypeQLParser.RULE_relation = 43;
TypeQLParser.RULE_role_player = 44;
TypeQLParser.RULE_player = 45;
TypeQLParser.RULE_attributes = 46;
TypeQLParser.RULE_attribute = 47;
TypeQLParser.RULE_predicate = 48;
TypeQLParser.RULE_predicate_equality = 49;
TypeQLParser.RULE_predicate_substring = 50;
TypeQLParser.RULE_predicate_value = 51;
TypeQLParser.RULE_schema_rule = 52;
TypeQLParser.RULE_type_any = 53;
TypeQLParser.RULE_type_scoped = 54;
TypeQLParser.RULE_type = 55;
TypeQLParser.RULE_label_any = 56;
TypeQLParser.RULE_label_scoped = 57;
TypeQLParser.RULE_label = 58;
TypeQLParser.RULE_schema_native = 59;
TypeQLParser.RULE_type_native = 60;
TypeQLParser.RULE_value_type = 61;
TypeQLParser.RULE_value = 62;
TypeQLParser.RULE_regex = 63;
TypeQLParser.RULE_unreserved = 64;
// tslint:disable:no-trailing-whitespace
TypeQLParser.ruleNames = [
    "eof_query", "eof_queries", "eof_pattern", "eof_patterns", "eof_definables",
    "eof_variable", "eof_label", "eof_schema_rule", "query", "query_define",
    "query_undefine", "query_insert", "query_update", "query_delete", "query_match",
    "query_match_aggregate", "query_match_group", "query_match_group_agg",
    "modifiers", "filter", "sort", "var_order", "offset", "limit", "match_aggregate",
    "aggregate_method", "match_group", "definables", "definable", "patterns",
    "pattern", "pattern_conjunction", "pattern_disjunction", "pattern_negation",
    "pattern_variable", "variable_concept", "variable_type", "type_constraint",
    "variable_things", "variable_thing_any", "variable_thing", "variable_relation",
    "variable_attribute", "relation", "role_player", "player", "attributes",
    "attribute", "predicate", "predicate_equality", "predicate_substring",
    "predicate_value", "schema_rule", "type_any", "type_scoped", "type", "label_any",
    "label_scoped", "label", "schema_native", "type_native", "value_type",
    "value", "regex", "unreserved",
];
TypeQLParser._LITERAL_NAMES = [
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
TypeQLParser._SYMBOLIC_NAMES = [
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
TypeQLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TypeQLParser._LITERAL_NAMES, TypeQLParser._SYMBOLIC_NAMES, []);
TypeQLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u021E\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x03\x02\x03\x02\x03\x02\x03" +
    "\x03\x06\x03\x89\n\x03\r\x03\x0E\x03\x8A\x03\x03\x03\x03\x03\x04\x03\x04" +
    "\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
    "\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x05\n\xAA\n\n\x03\v\x03\v\x03\v\x03\f\x03\f" +
    "\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xB9\n\r\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
    "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\xD5\n" +
    "\x14\x03\x14\x03\x14\x03\x14\x05\x14\xDA\n\x14\x03\x14\x03\x14\x03\x14" +
    "\x05\x14\xDF\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\xE4\n\x14\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x07\x15\xEA\n\x15\f\x15\x0E\x15\xED\v\x15\x03\x16" +
    "\x03\x16\x03\x16\x03\x16\x07\x16\xF3\n\x16\f\x16\x0E\x16\xF6\v\x16\x03" +
    "\x17\x03\x17\x05\x17\xFA\n\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
    "\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0104\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0111" +
    "\n\x1D\r\x1D\x0E\x1D\u0112\x03\x1E\x03\x1E\x05\x1E\u0117\n\x1E\x03\x1F" +
    "\x03\x1F\x03\x1F\x06\x1F\u011C\n\x1F\r\x1F\x0E\x1F\u011D\x03 \x03 \x03" +
    " \x03 \x05 \u0124\n \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x06\"\u0132\n\"\r\"\x0E\"\u0133\x03#\x03#\x03#\x03" +
    "#\x03#\x03$\x03$\x03$\x05$\u013E\n$\x03%\x03%\x03%\x03%\x03&\x03&\x03" +
    "&\x03&\x07&\u0148\n&\f&\x0E&\u014B\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
    "\'\x03\'\x05\'\u0154\n\'\x03\'\x05\'\u0157\n\'\x03\'\x03\'\x03\'\x03\'" +
    "\x05\'\u015D\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0163\n\'\x03\'\x03\'\x03" +
    "\'\x03\'\x03\'\x03\'\x05\'\u016B\n\'\x03(\x03(\x03(\x06(\u0170\n(\r(\x0E" +
    "(\u0171\x03)\x03)\x03)\x05)\u0177\n)\x03*\x03*\x03*\x03*\x03*\x05*\u017E" +
    "\n*\x03*\x03*\x03*\x03*\x03*\x05*\u0185\n*\x03*\x03*\x05*\u0189\n*\x03" +
    "+\x05+\u018C\n+\x03+\x03+\x03+\x03+\x03+\x05+\u0193\n+\x03+\x05+\u0196" +
    "\n+\x03+\x03+\x05+\u019A\n+\x05+\u019C\n+\x03,\x05,\u019F\n,\x03,\x03" +
    ",\x03,\x03,\x03,\x05,\u01A6\n,\x03,\x05,\u01A9\n,\x03,\x03,\x05,\u01AD" +
    "\n,\x05,\u01AF\n,\x03-\x03-\x03-\x03-\x07-\u01B5\n-\f-\x0E-\u01B8\v-\x03" +
    "-\x03-\x03.\x03.\x03.\x03.\x03.\x05.\u01C1\n.\x03/\x03/\x030\x030\x03" +
    "0\x070\u01C8\n0\f0\x0E0\u01CB\v0\x031\x031\x031\x031\x051\u01D1\n1\x03" +
    "1\x031\x051\u01D5\n1\x032\x032\x032\x032\x032\x032\x032\x052\u01DE\n2" +
    "\x033\x033\x034\x034\x035\x035\x055\u01E6\n5\x036\x036\x036\x036\x036" +
    "\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u01F7\n6\x037" +
    "\x037\x037\x057\u01FC\n7\x038\x038\x058\u0200\n8\x039\x039\x059\u0204" +
    "\n9\x03:\x03:\x05:\u0208\n:\x03;\x03;\x03<\x03<\x03<\x03<\x05<\u0210\n" +
    "<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x02" +
    "\x02\x02C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x02\t\x03\x02<B\x03\x0238\x03\x029:\x03" +
    "\x02\x11\x15\x03\x02CG\x04\x02HHKO\x06\x02\v\v\x17\x19//:B\x02\u0225\x02" +
    "\x84\x03\x02\x02\x02\x04\x88\x03\x02\x02\x02\x06\x8E\x03\x02\x02\x02\b" +
    "\x91\x03\x02\x02\x02\n\x94\x03\x02\x02\x02\f\x97\x03\x02\x02\x02\x0E\x9A" +
    "\x03\x02\x02\x02\x10\x9D\x03\x02\x02\x02\x12\xA9\x03\x02\x02\x02\x14\xAB" +
    "\x03\x02\x02\x02\x16\xAE\x03\x02\x02\x02\x18\xB8\x03\x02\x02\x02\x1A\xBA" +
    "\x03\x02\x02\x02\x1C\xBE\x03\x02\x02\x02\x1E\xC3\x03\x02\x02\x02 \xC7" +
    "\x03\x02\x02\x02\"\xCA\x03\x02\x02\x02$\xCD\x03\x02\x02\x02&\xD4\x03\x02" +
    "\x02\x02(\xE5\x03\x02\x02\x02*\xEE\x03\x02\x02\x02,\xF7\x03\x02\x02\x02" +
    ".\xFB\x03\x02\x02\x020\xFE\x03\x02\x02\x022\u0101\x03\x02\x02\x024\u0107" +
    "\x03\x02\x02\x026\u0109\x03\x02\x02\x028\u0110\x03\x02\x02\x02:\u0116" +
    "\x03\x02\x02\x02<\u011B\x03\x02\x02\x02>\u0123\x03\x02\x02\x02@\u0125" +
    "\x03\x02\x02\x02B\u0129\x03\x02\x02\x02D\u0135\x03\x02\x02\x02F\u013D" +
    "\x03\x02\x02\x02H\u013F\x03\x02\x02\x02J\u0143\x03\x02\x02\x02L\u016A" +
    "\x03\x02\x02\x02N\u016F\x03\x02\x02\x02P\u0176\x03\x02\x02\x02R\u0188" +
    "\x03\x02\x02\x02T\u019B\x03\x02\x02\x02V\u01AE\x03\x02\x02\x02X\u01B0" +
    "\x03\x02\x02\x02Z\u01C0\x03\x02\x02\x02\\\u01C2\x03\x02\x02\x02^\u01C4" +
    "\x03\x02\x02\x02`\u01D4\x03\x02\x02\x02b\u01DD\x03\x02\x02\x02d\u01DF" +
    "\x03\x02\x02\x02f\u01E1\x03\x02\x02\x02h\u01E5\x03\x02\x02\x02j\u01F6" +
    "\x03\x02\x02\x02l\u01FB\x03\x02\x02\x02n\u01FF\x03\x02\x02\x02p\u0203" +
    "\x03\x02\x02\x02r\u0207\x03\x02\x02\x02t\u0209\x03\x02\x02\x02v\u020F" +
    "\x03\x02\x02\x02x\u0211\x03\x02\x02\x02z\u0213\x03\x02\x02\x02|\u0215" +
    "\x03\x02\x02\x02~\u0217\x03\x02\x02\x02\x80\u0219\x03\x02\x02\x02\x82" +
    "\u021B\x03\x02\x02\x02\x84\x85\x05\x12\n\x02\x85\x86\x07\x02\x02\x03\x86" +
    "\x03\x03\x02\x02\x02\x87\x89\x05\x12\n\x02\x88\x87\x03\x02\x02\x02\x89" +
    "\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B" +
    "\x8C\x03\x02\x02\x02\x8C\x8D\x07\x02\x02\x03\x8D\x05\x03\x02\x02\x02\x8E" +
    "\x8F\x05> \x02\x8F\x90\x07\x02\x02\x03\x90\x07\x03\x02\x02\x02\x91\x92" +
    "\x05<\x1F\x02\x92\x93\x07\x02\x02\x03\x93\t\x03\x02\x02\x02\x94\x95\x05" +
    "8\x1D\x02\x95\x96\x07\x02\x02\x03\x96\v\x03\x02\x02\x02\x97\x98\x05F$" +
    "\x02\x98\x99\x07\x02\x02\x03\x99\r\x03\x02\x02\x02\x9A\x9B\x05v<\x02\x9B" +
    "\x9C\x07\x02\x02\x03\x9C\x0F\x03\x02\x02\x02\x9D\x9E\x05j6\x02\x9E\x9F" +
    "\x07\x02\x02\x03\x9F\x11\x03\x02\x02\x02\xA0\xAA\x05\x14\v\x02\xA1\xAA" +
    "\x05\x16\f\x02\xA2\xAA\x05\x18\r\x02\xA3\xAA\x05\x1A\x0E\x02\xA4\xAA\x05" +
    "\x1C\x0F\x02\xA5\xAA\x05\x1E\x10\x02\xA6\xAA\x05 \x11\x02\xA7\xAA\x05" +
    "\"\x12\x02\xA8\xAA\x05$\x13\x02\xA9\xA0\x03\x02\x02\x02\xA9\xA1\x03\x02" +
    "\x02\x02\xA9\xA2\x03\x02\x02\x02\xA9\xA3\x03\x02\x02\x02\xA9\xA4\x03\x02" +
    "\x02\x02\xA9\xA5\x03\x02\x02\x02\xA9\xA6\x03\x02\x02\x02\xA9\xA7\x03\x02" +
    "\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x13\x03\x02\x02\x02\xAB\xAC\x07\f" +
    "\x02\x02\xAC\xAD\x058\x1D\x02\xAD\x15\x03\x02\x02\x02\xAE\xAF\x07\r\x02" +
    "\x02\xAF\xB0\x058\x1D\x02\xB0\x17\x03\x02\x02\x02\xB1\xB2\x07\n\x02\x02" +
    "\xB2\xB3\x05<\x1F\x02\xB3\xB4\x07\x0E\x02\x02\xB4\xB5\x05N(\x02\xB5\xB9" +
    "\x03\x02\x02\x02\xB6\xB7\x07\x0E\x02\x02\xB7\xB9\x05N(\x02\xB8\xB1\x03" +
    "\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\x19\x03\x02\x02\x02\xBA\xBB\x05" +
    "\x1C\x0F\x02\xBB\xBC\x07\x0E\x02\x02\xBC\xBD\x05N(\x02\xBD\x1B\x03\x02" +
    "\x02\x02\xBE\xBF\x07\n\x02\x02\xBF\xC0\x05<\x1F\x02\xC0\xC1\x07\x0F\x02" +
    "\x02\xC1\xC2\x05N(\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC4\x07\n\x02\x02\xC4" +
    "\xC5\x05<\x1F\x02\xC5\xC6\x05&\x14\x02\xC6\x1F\x03\x02\x02\x02\xC7\xC8" +
    "\x05\x1E\x10\x02\xC8\xC9\x052\x1A\x02\xC9!\x03\x02\x02\x02\xCA\xCB\x05" +
    "\x1E\x10\x02\xCB\xCC\x056\x1C\x02\xCC#\x03\x02\x02\x02\xCD\xCE\x05\x1E" +
    "\x10\x02\xCE\xCF\x056\x1C\x02\xCF\xD0\x052\x1A\x02\xD0%\x03\x02\x02\x02" +
    "\xD1\xD2\x05(\x15\x02\xD2\xD3\x07\x03\x02\x02\xD3\xD5\x03\x02\x02\x02" +
    "\xD4\xD1\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD9\x03\x02\x02\x02" +
    "\xD6\xD7\x05*\x16\x02\xD7\xD8\x07\x03\x02\x02\xD8\xDA\x03\x02\x02\x02" +
    "\xD9\xD6\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDE\x03\x02\x02\x02" +
    "\xDB\xDC\x05.\x18\x02\xDC\xDD\x07\x03\x02\x02\xDD\xDF\x03\x02\x02\x02" +
    "\xDE\xDB\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE3\x03\x02\x02\x02" +
    "\xE0\xE1\x050\x19\x02\xE1\xE2\x07\x03\x02\x02\xE2\xE4\x03\x02\x02\x02" +
    "\xE3\xE0\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\'\x03\x02\x02\x02" +
    "\xE5\xE6\x07\v\x02\x02\xE6\xEB\x07P\x02\x02\xE7\xE8\x07\x04\x02\x02\xE8" +
    "\xEA\x07P\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB" +
    "\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC)\x03\x02\x02\x02\xED" +
    "\xEB\x03\x02\x02\x02\xEE\xEF\x07\x19\x02\x02\xEF\xF4\x05,\x17\x02\xF0" +
    "\xF1\x07\x04\x02\x02\xF1\xF3\x05,\x17\x02\xF2\xF0\x03\x02\x02\x02\xF3" +
    "\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5" +
    "+\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x07P\x02\x02\xF8\xFA" +
    "\x07\x1A\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA-" +
    "\x03\x02\x02\x02\xFB\xFC\x07\x17\x02\x02\xFC\xFD\x07L\x02\x02\xFD/\x03" +
    "\x02\x02\x02\xFE\xFF\x07\x18\x02\x02\xFF\u0100\x07L\x02\x02\u01001\x03" +
    "\x02\x02\x02\u0101\u0103\x054\x1B\x02\u0102\u0104\x07P\x02\x02\u0103\u0102" +
    "\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
    "\u0105\u0106\x07\x03\x02\x02\u01063\x03\x02\x02\x02\u0107\u0108\t\x02" +
    "\x02\x02\u01085\x03\x02\x02\x02\u0109\u010A\x07;\x02\x02\u010A\u010B\x07" +
    "P\x02\x02\u010B\u010C\x07\x03\x02\x02\u010C7\x03\x02\x02\x02\u010D\u010E" +
    "\x05:\x1E\x02\u010E\u010F\x07\x03\x02\x02\u010F\u0111\x03\x02\x02\x02" +
    "\u0110\u010D\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0110\x03" +
    "\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u01139\x03\x02\x02\x02\u0114" +
    "\u0117\x05J&\x02\u0115\u0117\x05j6\x02\u0116\u0114\x03\x02\x02\x02\u0116" +
    "\u0115\x03\x02\x02\x02\u0117;\x03\x02\x02\x02\u0118\u0119\x05> \x02\u0119" +
    "\u011A\x07\x03\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\u0118\x03\x02" +
    "\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
    "\u011E\x03\x02\x02\x02\u011E=\x03\x02\x02\x02\u011F\u0124\x05F$\x02\u0120" +
    "\u0124\x05@!\x02\u0121\u0124\x05B\"\x02\u0122\u0124\x05D#\x02\u0123\u011F" +
    "\x03\x02\x02\x02\u0123\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02" +
    "\u0123\u0122\x03\x02\x02\x02\u0124?\x03\x02\x02\x02\u0125\u0126\x07\x05" +
    "\x02\x02\u0126\u0127\x05<\x1F\x02\u0127\u0128\x07\x06\x02\x02\u0128A\x03" +
    "\x02\x02\x02\u0129\u012A\x07\x05\x02\x02\u012A\u012B\x05<\x1F\x02\u012B" +
    "\u0131\x07\x06\x02\x02\u012C\u012D\x071\x02\x02\u012D\u012E\x07\x05\x02" +
    "\x02\u012E\u012F\x05<\x1F\x02\u012F\u0130\x07\x06\x02\x02\u0130\u0132" +
    "\x03\x02\x02\x02\u0131\u012C\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02" +
    "\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134C\x03\x02" +
    "\x02\x02\u0135\u0136\x072\x02\x02\u0136\u0137\x07\x05\x02\x02\u0137\u0138" +
    "\x05<\x1F\x02\u0138\u0139\x07\x06\x02\x02\u0139E\x03\x02\x02\x02\u013A" +
    "\u013E\x05H%\x02\u013B\u013E\x05J&\x02\u013C\u013E\x05P)\x02\u013D\u013A" +
    "\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013C\x03\x02\x02\x02" +
    "\u013EG\x03\x02\x02\x02\u013F\u0140\x07P\x02\x02\u0140\u0141\x070\x02" +
    "\x02\u0141\u0142\x07P\x02\x02\u0142I\x03\x02\x02\x02\u0143\u0144\x05l" +
    "7\x02\u0144\u0149\x05L\'\x02\u0145\u0146\x07\x04\x02\x02\u0146\u0148\x05" +
    "L\'\x02\u0147\u0145\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149" +
    "\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014AK\x03\x02\x02" +
    "\x02\u014B\u0149\x03\x02\x02\x02\u014C\u016B\x07\x1E\x02\x02\u014D\u014E" +
    "\x07\x1F\x02\x02\u014E\u016B\x05l7\x02\u014F\u0150\x07\"\x02\x02\u0150" +
    "\u0153\x05p9\x02\u0151\u0152\x07%\x02\x02\u0152\u0154\x05p9\x02\u0153" +
    "\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02" +
    "\x02\x02\u0155\u0157\x07#\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157" +
    "\x03\x02\x02\x02\u0157\u016B\x03\x02\x02\x02\u0158\u0159\x07\'\x02\x02" +
    "\u0159\u015C\x05p9\x02\u015A\u015B\x07%\x02\x02\u015B\u015D\x05p9\x02" +
    "\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u016B\x03" +
    "\x02\x02\x02\u015E\u015F\x07&\x02\x02\u015F\u0162\x05n8\x02\u0160\u0161" +
    "\x07%\x02\x02\u0161\u0163\x05p9\x02\u0162\u0160\x03\x02\x02\x02\u0162" +
    "\u0163\x03\x02\x02\x02\u0163\u016B\x03\x02\x02\x02\u0164\u0165\x07/\x02" +
    "\x02\u0165\u016B\x05|?\x02\u0166\u0167\x07$\x02\x02\u0167\u016B\x07K\x02" +
    "\x02\u0168\u0169\x07\x1D\x02\x02\u0169\u016B\x05r:\x02\u016A\u014C\x03" +
    "\x02\x02\x02\u016A\u014D\x03\x02\x02\x02\u016A\u014F\x03\x02\x02\x02\u016A" +
    "\u0158\x03\x02\x02\x02\u016A\u015E\x03\x02\x02\x02\u016A\u0164\x03\x02" +
    "\x02\x02\u016A\u0166\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
    "M\x03\x02\x02\x02\u016C\u016D\x05P)\x02\u016D\u016E\x07\x03\x02\x02\u016E" +
    "\u0170\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02\u0170\u0171\x03\x02" +
    "\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
    "O\x03\x02\x02\x02\u0173\u0177\x05R*\x02\u0174\u0177\x05T+\x02\u0175\u0177" +
    "\x05V,\x02\u0176\u0173\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176" +
    "\u0175\x03\x02\x02\x02\u0177Q\x03\x02\x02\x02\u0178\u0179\x07P\x02\x02" +
    "\u0179\u017A\x07+\x02\x02\u017A\u017D\x05p9\x02\u017B\u017C\x07\x04\x02" +
    "\x02\u017C\u017E\x05^0\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03" +
    "\x02\x02\x02\u017E\u0189\x03\x02\x02\x02\u017F\u0180\x07P\x02\x02\u0180" +
    "\u0181\x07*\x02\x02\u0181\u0184\x07S\x02\x02\u0182\u0183\x07\x04\x02\x02" +
    "\u0183\u0185\x05^0\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02" +
    "\x02\x02\u0185\u0189\x03\x02\x02\x02\u0186\u0187\x07P\x02\x02\u0187\u0189" +
    "\x05^0\x02\u0188\u0178\x03\x02\x02\x02\u0188\u017F\x03\x02\x02\x02\u0188" +
    "\u0186\x03\x02\x02\x02\u0189S\x03\x02\x02\x02\u018A\u018C\x07P\x02\x02" +
    "\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03" +
    "\x02\x02\x02\u018D\u018E\x05X-\x02\u018E\u018F\x07+\x02\x02\u018F\u0192" +
    "\x05p9\x02\u0190\u0191\x07\x04\x02\x02\u0191\u0193\x05^0\x02\u0192\u0190" +
    "\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u019C\x03\x02\x02\x02" +
    "\u0194\u0196\x07P\x02\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03" +
    "\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199\x05X-\x02\u0198\u019A" +
    "\x05^0\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
    "\u019C\x03\x02\x02\x02\u019B\u018B\x03\x02\x02\x02\u019B\u0195\x03\x02" +
    "\x02\x02\u019CU\x03\x02\x02\x02\u019D\u019F\x07P\x02\x02\u019E\u019D\x03" +
    "\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
    "\u01A1\x05b2\x02\u01A1\u01A2\x07+\x02\x02\u01A2\u01A5\x05p9\x02\u01A3" +
    "\u01A4\x07\x04\x02\x02\u01A4\u01A6\x05^0\x02\u01A5\u01A3\x03\x02\x02\x02" +
    "\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01AF\x03\x02\x02\x02\u01A7\u01A9\x07" +
    "P\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9" +
    "\u01AA\x03\x02\x02\x02\u01AA\u01AC\x05b2\x02\u01AB\u01AD\x05^0\x02\u01AC" +
    "\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02" +
    "\x02\x02\u01AE\u019E\x03\x02\x02\x02\u01AE\u01A8\x03\x02\x02\x02\u01AF" +
    "W\x03\x02\x02\x02\u01B0\u01B1\x07\x07\x02\x02\u01B1\u01B6\x05Z.\x02\u01B2" +
    "\u01B3\x07\x04\x02\x02\u01B3\u01B5\x05Z.\x02\u01B4\u01B2\x03\x02\x02\x02" +
    "\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03" +
    "\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9" +
    "\u01BA\x07\b\x02\x02\u01BAY\x03\x02\x02\x02\u01BB\u01BC\x05p9\x02\u01BC" +
    "\u01BD\x07\t\x02\x02\u01BD\u01BE\x05\\/\x02\u01BE\u01C1\x03\x02\x02\x02" +
    "\u01BF\u01C1\x05\\/\x02\u01C0\u01BB\x03\x02\x02\x02\u01C0\u01BF\x03\x02" +
    "\x02\x02\u01C1[\x03\x02\x02\x02\u01C2\u01C3\x07P\x02\x02\u01C3]\x03\x02" +
    "\x02\x02\u01C4\u01C9\x05`1\x02\u01C5\u01C6\x07\x04\x02\x02\u01C6\u01C8" +
    "\x05`1\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9" +
    "\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA_\x03\x02\x02" +
    "\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CD\x07.\x02\x02\u01CD\u01D0" +
    "\x05v<\x02\u01CE\u01D1\x07P\x02\x02\u01CF\u01D1\x05b2\x02\u01D0\u01CE" +
    "\x03\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D5\x03\x02\x02\x02" +
    "\u01D2\u01D3\x07.\x02\x02\u01D3\u01D5\x07P\x02\x02\u01D4\u01CC\x03\x02" +
    "\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5a\x03\x02\x02\x02\u01D6\u01DE" +
    "\x05~@\x02\u01D7\u01D8\x05d3\x02\u01D8\u01D9\x05h5\x02\u01D9\u01DE\x03" +
    "\x02\x02\x02\u01DA\u01DB\x05f4\x02\u01DB\u01DC\x07K\x02\x02\u01DC\u01DE" +
    "\x03\x02\x02\x02\u01DD\u01D6\x03\x02\x02\x02\u01DD\u01D7\x03\x02\x02\x02" +
    "\u01DD\u01DA\x03\x02\x02\x02\u01DEc\x03\x02\x02\x02\u01DF\u01E0\t\x03" +
    "\x02\x02\u01E0e\x03\x02\x02\x02\u01E1\u01E2\t\x04\x02\x02\u01E2g\x03\x02" +
    "\x02\x02\u01E3\u01E6\x05~@\x02\u01E4\u01E6\x07P\x02\x02\u01E5\u01E3\x03" +
    "\x02\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6i\x03\x02\x02\x02\u01E7" +
    "\u01E8\x07\x16\x02\x02\u01E8\u01F7\x05v<\x02\u01E9\u01EA\x07\x16\x02\x02" +
    "\u01EA\u01EB\x05v<\x02\u01EB\u01EC\x07\t\x02\x02\u01EC\u01ED\x07(\x02" +
    "\x02\u01ED\u01EE\x07\x05\x02\x02\u01EE\u01EF\x05<\x1F\x02\u01EF\u01F0" +
    "\x07\x06\x02\x02\u01F0\u01F1\x07)\x02\x02\u01F1\u01F2\x07\x05\x02\x02" +
    "\u01F2\u01F3\x05P)\x02\u01F3\u01F4\x07\x03\x02\x02\u01F4\u01F5\x07\x06" +
    "\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01E7\x03\x02\x02\x02\u01F6" +
    "\u01E9\x03\x02\x02\x02\u01F7k\x03\x02\x02\x02\u01F8\u01FC\x05n8\x02\u01F9" +
    "\u01FC\x05p9\x02\u01FA\u01FC\x07P\x02\x02\u01FB\u01F8\x03\x02\x02\x02" +
    "\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FCm\x03\x02" +
    "\x02\x02\u01FD\u0200\x05t;\x02\u01FE\u0200\x07P\x02\x02\u01FF\u01FD\x03" +
    "\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200o\x03\x02\x02\x02\u0201" +
    "\u0204\x05v<\x02\u0202\u0204\x07P\x02\x02\u0203\u0201\x03\x02\x02\x02" +
    "\u0203\u0202\x03\x02\x02\x02\u0204q\x03\x02\x02\x02\u0205\u0208\x05t;" +
    "\x02\u0206\u0208\x05v<\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0206\x03" +
    "\x02\x02\x02\u0208s\x03\x02\x02\x02\u0209\u020A\x07U\x02\x02\u020Au\x03" +
    "\x02\x02\x02\u020B\u0210\x07T\x02\x02\u020C\u0210\x05x=\x02\u020D\u0210" +
    "\x05z>\x02\u020E\u0210\x05\x82B\x02\u020F\u020B\x03\x02\x02\x02\u020F" +
    "\u020C\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03\x02" +
    "\x02\x02\u0210w\x03\x02\x02\x02\u0211\u0212\x07\x16\x02\x02\u0212y\x03" +
    "\x02\x02\x02\u0213\u0214\t\x05\x02\x02\u0214{\x03\x02\x02\x02\u0215\u0216" +
    "\t\x06\x02\x02\u0216}\x03\x02\x02\x02\u0217\u0218\t\x07\x02\x02\u0218" +
    "\x7F\x03\x02\x02\x02\u0219\u021A\x07K\x02\x02\u021A\x81\x03\x02\x02\x02" +
    "\u021B\u021C\t\b\x02\x02\u021C\x83\x03\x02\x02\x025\x8A\xA9\xB8\xD4\xD9" +
    "\xDE\xE3\xEB\xF4\xF9\u0103\u0112\u0116\u011D\u0123\u0133\u013D\u0149\u0153" +
    "\u0156\u015C\u0162\u016A\u0171\u0176\u017D\u0184\u0188\u018B\u0192\u0195" +
    "\u0199\u019B\u019E\u01A5\u01A8\u01AC\u01AE\u01B6\u01C0\u01C9\u01D0\u01D4" +
    "\u01DD\u01E5\u01F6\u01FB\u01FF\u0203\u0207\u020F";
class Eof_queryContext extends ParserRuleContext_1.ParserRuleContext {
    query() {
        return this.getRuleContext(0, QueryContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_query) {
            listener.enterEof_query(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_query) {
            listener.exitEof_query(this);
        }
    }
}
exports.Eof_queryContext = Eof_queryContext;
class Eof_queriesContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    query(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryContext);
        }
        else {
            return this.getRuleContext(i, QueryContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_queries; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_queries) {
            listener.enterEof_queries(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_queries) {
            listener.exitEof_queries(this);
        }
    }
}
exports.Eof_queriesContext = Eof_queriesContext;
class Eof_patternContext extends ParserRuleContext_1.ParserRuleContext {
    pattern() {
        return this.getRuleContext(0, PatternContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_pattern; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_pattern) {
            listener.enterEof_pattern(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_pattern) {
            listener.exitEof_pattern(this);
        }
    }
}
exports.Eof_patternContext = Eof_patternContext;
class Eof_patternsContext extends ParserRuleContext_1.ParserRuleContext {
    patterns() {
        return this.getRuleContext(0, PatternsContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_patterns; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_patterns) {
            listener.enterEof_patterns(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_patterns) {
            listener.exitEof_patterns(this);
        }
    }
}
exports.Eof_patternsContext = Eof_patternsContext;
class Eof_definablesContext extends ParserRuleContext_1.ParserRuleContext {
    definables() {
        return this.getRuleContext(0, DefinablesContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_definables; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_definables) {
            listener.enterEof_definables(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_definables) {
            listener.exitEof_definables(this);
        }
    }
}
exports.Eof_definablesContext = Eof_definablesContext;
class Eof_variableContext extends ParserRuleContext_1.ParserRuleContext {
    pattern_variable() {
        return this.getRuleContext(0, Pattern_variableContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_variable) {
            listener.enterEof_variable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_variable) {
            listener.exitEof_variable(this);
        }
    }
}
exports.Eof_variableContext = Eof_variableContext;
class Eof_labelContext extends ParserRuleContext_1.ParserRuleContext {
    label() {
        return this.getRuleContext(0, LabelContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_label; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_label) {
            listener.enterEof_label(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_label) {
            listener.exitEof_label(this);
        }
    }
}
exports.Eof_labelContext = Eof_labelContext;
class Eof_schema_ruleContext extends ParserRuleContext_1.ParserRuleContext {
    schema_rule() {
        return this.getRuleContext(0, Schema_ruleContext);
    }
    EOF() { return this.getToken(TypeQLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_eof_schema_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterEof_schema_rule) {
            listener.enterEof_schema_rule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEof_schema_rule) {
            listener.exitEof_schema_rule(this);
        }
    }
}
exports.Eof_schema_ruleContext = Eof_schema_ruleContext;
class QueryContext extends ParserRuleContext_1.ParserRuleContext {
    query_define() {
        return this.tryGetRuleContext(0, Query_defineContext);
    }
    query_undefine() {
        return this.tryGetRuleContext(0, Query_undefineContext);
    }
    query_insert() {
        return this.tryGetRuleContext(0, Query_insertContext);
    }
    query_update() {
        return this.tryGetRuleContext(0, Query_updateContext);
    }
    query_delete() {
        return this.tryGetRuleContext(0, Query_deleteContext);
    }
    query_match() {
        return this.tryGetRuleContext(0, Query_matchContext);
    }
    query_match_aggregate() {
        return this.tryGetRuleContext(0, Query_match_aggregateContext);
    }
    query_match_group() {
        return this.tryGetRuleContext(0, Query_match_groupContext);
    }
    query_match_group_agg() {
        return this.tryGetRuleContext(0, Query_match_group_aggContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
}
exports.QueryContext = QueryContext;
class Query_defineContext extends ParserRuleContext_1.ParserRuleContext {
    DEFINE() { return this.getToken(TypeQLParser.DEFINE, 0); }
    definables() {
        return this.getRuleContext(0, DefinablesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_define; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_define) {
            listener.enterQuery_define(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_define) {
            listener.exitQuery_define(this);
        }
    }
}
exports.Query_defineContext = Query_defineContext;
class Query_undefineContext extends ParserRuleContext_1.ParserRuleContext {
    UNDEFINE() { return this.getToken(TypeQLParser.UNDEFINE, 0); }
    definables() {
        return this.getRuleContext(0, DefinablesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_undefine; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_undefine) {
            listener.enterQuery_undefine(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_undefine) {
            listener.exitQuery_undefine(this);
        }
    }
}
exports.Query_undefineContext = Query_undefineContext;
class Query_insertContext extends ParserRuleContext_1.ParserRuleContext {
    MATCH() { return this.tryGetToken(TypeQLParser.MATCH, 0); }
    patterns() {
        return this.tryGetRuleContext(0, PatternsContext);
    }
    INSERT() { return this.getToken(TypeQLParser.INSERT, 0); }
    variable_things() {
        return this.getRuleContext(0, Variable_thingsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_insert; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_insert) {
            listener.enterQuery_insert(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_insert) {
            listener.exitQuery_insert(this);
        }
    }
}
exports.Query_insertContext = Query_insertContext;
class Query_updateContext extends ParserRuleContext_1.ParserRuleContext {
    query_delete() {
        return this.getRuleContext(0, Query_deleteContext);
    }
    INSERT() { return this.getToken(TypeQLParser.INSERT, 0); }
    variable_things() {
        return this.getRuleContext(0, Variable_thingsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_update; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_update) {
            listener.enterQuery_update(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_update) {
            listener.exitQuery_update(this);
        }
    }
}
exports.Query_updateContext = Query_updateContext;
class Query_deleteContext extends ParserRuleContext_1.ParserRuleContext {
    MATCH() { return this.getToken(TypeQLParser.MATCH, 0); }
    patterns() {
        return this.getRuleContext(0, PatternsContext);
    }
    DELETE() { return this.getToken(TypeQLParser.DELETE, 0); }
    variable_things() {
        return this.getRuleContext(0, Variable_thingsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_delete; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_delete) {
            listener.enterQuery_delete(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_delete) {
            listener.exitQuery_delete(this);
        }
    }
}
exports.Query_deleteContext = Query_deleteContext;
class Query_matchContext extends ParserRuleContext_1.ParserRuleContext {
    MATCH() { return this.getToken(TypeQLParser.MATCH, 0); }
    patterns() {
        return this.getRuleContext(0, PatternsContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_match; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_match) {
            listener.enterQuery_match(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_match) {
            listener.exitQuery_match(this);
        }
    }
}
exports.Query_matchContext = Query_matchContext;
class Query_match_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    query_match() {
        return this.getRuleContext(0, Query_matchContext);
    }
    match_aggregate() {
        return this.getRuleContext(0, Match_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_match_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_match_aggregate) {
            listener.enterQuery_match_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_match_aggregate) {
            listener.exitQuery_match_aggregate(this);
        }
    }
}
exports.Query_match_aggregateContext = Query_match_aggregateContext;
class Query_match_groupContext extends ParserRuleContext_1.ParserRuleContext {
    query_match() {
        return this.getRuleContext(0, Query_matchContext);
    }
    match_group() {
        return this.getRuleContext(0, Match_groupContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_match_group; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_match_group) {
            listener.enterQuery_match_group(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_match_group) {
            listener.exitQuery_match_group(this);
        }
    }
}
exports.Query_match_groupContext = Query_match_groupContext;
class Query_match_group_aggContext extends ParserRuleContext_1.ParserRuleContext {
    query_match() {
        return this.getRuleContext(0, Query_matchContext);
    }
    match_group() {
        return this.getRuleContext(0, Match_groupContext);
    }
    match_aggregate() {
        return this.getRuleContext(0, Match_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_query_match_group_agg; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery_match_group_agg) {
            listener.enterQuery_match_group_agg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery_match_group_agg) {
            listener.exitQuery_match_group_agg(this);
        }
    }
}
exports.Query_match_group_aggContext = Query_match_group_aggContext;
class ModifiersContext extends ParserRuleContext_1.ParserRuleContext {
    filter() {
        return this.tryGetRuleContext(0, FilterContext);
    }
    sort() {
        return this.tryGetRuleContext(0, SortContext);
    }
    offset() {
        return this.tryGetRuleContext(0, OffsetContext);
    }
    limit() {
        return this.tryGetRuleContext(0, LimitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_modifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterModifiers) {
            listener.enterModifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModifiers) {
            listener.exitModifiers(this);
        }
    }
}
exports.ModifiersContext = ModifiersContext;
class FilterContext extends ParserRuleContext_1.ParserRuleContext {
    GET() { return this.getToken(TypeQLParser.GET, 0); }
    VAR_(i) {
        if (i === undefined) {
            return this.getTokens(TypeQLParser.VAR_);
        }
        else {
            return this.getToken(TypeQLParser.VAR_, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_filter; }
    // @Override
    enterRule(listener) {
        if (listener.enterFilter) {
            listener.enterFilter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFilter) {
            listener.exitFilter(this);
        }
    }
}
exports.FilterContext = FilterContext;
class SortContext extends ParserRuleContext_1.ParserRuleContext {
    SORT() { return this.getToken(TypeQLParser.SORT, 0); }
    var_order(i) {
        if (i === undefined) {
            return this.getRuleContexts(Var_orderContext);
        }
        else {
            return this.getRuleContext(i, Var_orderContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_sort; }
    // @Override
    enterRule(listener) {
        if (listener.enterSort) {
            listener.enterSort(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSort) {
            listener.exitSort(this);
        }
    }
}
exports.SortContext = SortContext;
class Var_orderContext extends ParserRuleContext_1.ParserRuleContext {
    VAR_() { return this.getToken(TypeQLParser.VAR_, 0); }
    ORDER_() { return this.tryGetToken(TypeQLParser.ORDER_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_var_order; }
    // @Override
    enterRule(listener) {
        if (listener.enterVar_order) {
            listener.enterVar_order(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVar_order) {
            listener.exitVar_order(this);
        }
    }
}
exports.Var_orderContext = Var_orderContext;
class OffsetContext extends ParserRuleContext_1.ParserRuleContext {
    OFFSET() { return this.getToken(TypeQLParser.OFFSET, 0); }
    LONG_() { return this.getToken(TypeQLParser.LONG_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_offset; }
    // @Override
    enterRule(listener) {
        if (listener.enterOffset) {
            listener.enterOffset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOffset) {
            listener.exitOffset(this);
        }
    }
}
exports.OffsetContext = OffsetContext;
class LimitContext extends ParserRuleContext_1.ParserRuleContext {
    LIMIT() { return this.getToken(TypeQLParser.LIMIT, 0); }
    LONG_() { return this.getToken(TypeQLParser.LONG_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_limit; }
    // @Override
    enterRule(listener) {
        if (listener.enterLimit) {
            listener.enterLimit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLimit) {
            listener.exitLimit(this);
        }
    }
}
exports.LimitContext = LimitContext;
class Match_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_method() {
        return this.getRuleContext(0, Aggregate_methodContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_match_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_aggregate) {
            listener.enterMatch_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_aggregate) {
            listener.exitMatch_aggregate(this);
        }
    }
}
exports.Match_aggregateContext = Match_aggregateContext;
class Aggregate_methodContext extends ParserRuleContext_1.ParserRuleContext {
    COUNT() { return this.tryGetToken(TypeQLParser.COUNT, 0); }
    MAX() { return this.tryGetToken(TypeQLParser.MAX, 0); }
    MEAN() { return this.tryGetToken(TypeQLParser.MEAN, 0); }
    MEDIAN() { return this.tryGetToken(TypeQLParser.MEDIAN, 0); }
    MIN() { return this.tryGetToken(TypeQLParser.MIN, 0); }
    STD() { return this.tryGetToken(TypeQLParser.STD, 0); }
    SUM() { return this.tryGetToken(TypeQLParser.SUM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_aggregate_method; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_method) {
            listener.enterAggregate_method(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_method) {
            listener.exitAggregate_method(this);
        }
    }
}
exports.Aggregate_methodContext = Aggregate_methodContext;
class Match_groupContext extends ParserRuleContext_1.ParserRuleContext {
    GROUP() { return this.getToken(TypeQLParser.GROUP, 0); }
    VAR_() { return this.getToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_match_group; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_group) {
            listener.enterMatch_group(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_group) {
            listener.exitMatch_group(this);
        }
    }
}
exports.Match_groupContext = Match_groupContext;
class DefinablesContext extends ParserRuleContext_1.ParserRuleContext {
    definable(i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinableContext);
        }
        else {
            return this.getRuleContext(i, DefinableContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_definables; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefinables) {
            listener.enterDefinables(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefinables) {
            listener.exitDefinables(this);
        }
    }
}
exports.DefinablesContext = DefinablesContext;
class DefinableContext extends ParserRuleContext_1.ParserRuleContext {
    variable_type() {
        return this.tryGetRuleContext(0, Variable_typeContext);
    }
    schema_rule() {
        return this.tryGetRuleContext(0, Schema_ruleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_definable; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefinable) {
            listener.enterDefinable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefinable) {
            listener.exitDefinable(this);
        }
    }
}
exports.DefinableContext = DefinableContext;
class PatternsContext extends ParserRuleContext_1.ParserRuleContext {
    pattern(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }
        else {
            return this.getRuleContext(i, PatternContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_patterns; }
    // @Override
    enterRule(listener) {
        if (listener.enterPatterns) {
            listener.enterPatterns(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatterns) {
            listener.exitPatterns(this);
        }
    }
}
exports.PatternsContext = PatternsContext;
class PatternContext extends ParserRuleContext_1.ParserRuleContext {
    pattern_variable() {
        return this.tryGetRuleContext(0, Pattern_variableContext);
    }
    pattern_conjunction() {
        return this.tryGetRuleContext(0, Pattern_conjunctionContext);
    }
    pattern_disjunction() {
        return this.tryGetRuleContext(0, Pattern_disjunctionContext);
    }
    pattern_negation() {
        return this.tryGetRuleContext(0, Pattern_negationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_pattern; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern) {
            listener.enterPattern(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern) {
            listener.exitPattern(this);
        }
    }
}
exports.PatternContext = PatternContext;
class Pattern_conjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    patterns() {
        return this.getRuleContext(0, PatternsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_pattern_conjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern_conjunction) {
            listener.enterPattern_conjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern_conjunction) {
            listener.exitPattern_conjunction(this);
        }
    }
}
exports.Pattern_conjunctionContext = Pattern_conjunctionContext;
class Pattern_disjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    patterns(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatternsContext);
        }
        else {
            return this.getRuleContext(i, PatternsContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(TypeQLParser.OR);
        }
        else {
            return this.getToken(TypeQLParser.OR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_pattern_disjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern_disjunction) {
            listener.enterPattern_disjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern_disjunction) {
            listener.exitPattern_disjunction(this);
        }
    }
}
exports.Pattern_disjunctionContext = Pattern_disjunctionContext;
class Pattern_negationContext extends ParserRuleContext_1.ParserRuleContext {
    NOT() { return this.getToken(TypeQLParser.NOT, 0); }
    patterns() {
        return this.getRuleContext(0, PatternsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_pattern_negation; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern_negation) {
            listener.enterPattern_negation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern_negation) {
            listener.exitPattern_negation(this);
        }
    }
}
exports.Pattern_negationContext = Pattern_negationContext;
class Pattern_variableContext extends ParserRuleContext_1.ParserRuleContext {
    variable_concept() {
        return this.tryGetRuleContext(0, Variable_conceptContext);
    }
    variable_type() {
        return this.tryGetRuleContext(0, Variable_typeContext);
    }
    variable_thing_any() {
        return this.tryGetRuleContext(0, Variable_thing_anyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_pattern_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern_variable) {
            listener.enterPattern_variable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern_variable) {
            listener.exitPattern_variable(this);
        }
    }
}
exports.Pattern_variableContext = Pattern_variableContext;
class Variable_conceptContext extends ParserRuleContext_1.ParserRuleContext {
    VAR_(i) {
        if (i === undefined) {
            return this.getTokens(TypeQLParser.VAR_);
        }
        else {
            return this.getToken(TypeQLParser.VAR_, i);
        }
    }
    IS() { return this.getToken(TypeQLParser.IS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_concept; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_concept) {
            listener.enterVariable_concept(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_concept) {
            listener.exitVariable_concept(this);
        }
    }
}
exports.Variable_conceptContext = Variable_conceptContext;
class Variable_typeContext extends ParserRuleContext_1.ParserRuleContext {
    type_any() {
        return this.getRuleContext(0, Type_anyContext);
    }
    type_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_constraintContext);
        }
        else {
            return this.getRuleContext(i, Type_constraintContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_type) {
            listener.enterVariable_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_type) {
            listener.exitVariable_type(this);
        }
    }
}
exports.Variable_typeContext = Variable_typeContext;
class Type_constraintContext extends ParserRuleContext_1.ParserRuleContext {
    ABSTRACT() { return this.tryGetToken(TypeQLParser.ABSTRACT, 0); }
    SUB_() { return this.tryGetToken(TypeQLParser.SUB_, 0); }
    type_any() {
        return this.tryGetRuleContext(0, Type_anyContext);
    }
    OWNS() { return this.tryGetToken(TypeQLParser.OWNS, 0); }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    AS() { return this.tryGetToken(TypeQLParser.AS, 0); }
    IS_KEY() { return this.tryGetToken(TypeQLParser.IS_KEY, 0); }
    RELATES() { return this.tryGetToken(TypeQLParser.RELATES, 0); }
    PLAYS() { return this.tryGetToken(TypeQLParser.PLAYS, 0); }
    type_scoped() {
        return this.tryGetRuleContext(0, Type_scopedContext);
    }
    VALUE() { return this.tryGetToken(TypeQLParser.VALUE, 0); }
    value_type() {
        return this.tryGetRuleContext(0, Value_typeContext);
    }
    REGEX() { return this.tryGetToken(TypeQLParser.REGEX, 0); }
    STRING_() { return this.tryGetToken(TypeQLParser.STRING_, 0); }
    TYPE() { return this.tryGetToken(TypeQLParser.TYPE, 0); }
    label_any() {
        return this.tryGetRuleContext(0, Label_anyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_type_constraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_constraint) {
            listener.enterType_constraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_constraint) {
            listener.exitType_constraint(this);
        }
    }
}
exports.Type_constraintContext = Type_constraintContext;
class Variable_thingsContext extends ParserRuleContext_1.ParserRuleContext {
    variable_thing_any(i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_thing_anyContext);
        }
        else {
            return this.getRuleContext(i, Variable_thing_anyContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_things; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_things) {
            listener.enterVariable_things(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_things) {
            listener.exitVariable_things(this);
        }
    }
}
exports.Variable_thingsContext = Variable_thingsContext;
class Variable_thing_anyContext extends ParserRuleContext_1.ParserRuleContext {
    variable_thing() {
        return this.tryGetRuleContext(0, Variable_thingContext);
    }
    variable_relation() {
        return this.tryGetRuleContext(0, Variable_relationContext);
    }
    variable_attribute() {
        return this.tryGetRuleContext(0, Variable_attributeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_thing_any; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_thing_any) {
            listener.enterVariable_thing_any(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_thing_any) {
            listener.exitVariable_thing_any(this);
        }
    }
}
exports.Variable_thing_anyContext = Variable_thing_anyContext;
class Variable_thingContext extends ParserRuleContext_1.ParserRuleContext {
    VAR_() { return this.getToken(TypeQLParser.VAR_, 0); }
    ISA_() { return this.tryGetToken(TypeQLParser.ISA_, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    attributes() {
        return this.tryGetRuleContext(0, AttributesContext);
    }
    IID() { return this.tryGetToken(TypeQLParser.IID, 0); }
    IID_() { return this.tryGetToken(TypeQLParser.IID_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_thing; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_thing) {
            listener.enterVariable_thing(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_thing) {
            listener.exitVariable_thing(this);
        }
    }
}
exports.Variable_thingContext = Variable_thingContext;
class Variable_relationContext extends ParserRuleContext_1.ParserRuleContext {
    relation() {
        return this.getRuleContext(0, RelationContext);
    }
    ISA_() { return this.tryGetToken(TypeQLParser.ISA_, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    attributes() {
        return this.tryGetRuleContext(0, AttributesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_relation; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_relation) {
            listener.enterVariable_relation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_relation) {
            listener.exitVariable_relation(this);
        }
    }
}
exports.Variable_relationContext = Variable_relationContext;
class Variable_attributeContext extends ParserRuleContext_1.ParserRuleContext {
    predicate() {
        return this.getRuleContext(0, PredicateContext);
    }
    ISA_() { return this.tryGetToken(TypeQLParser.ISA_, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    attributes() {
        return this.tryGetRuleContext(0, AttributesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_variable_attribute; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_attribute) {
            listener.enterVariable_attribute(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_attribute) {
            listener.exitVariable_attribute(this);
        }
    }
}
exports.Variable_attributeContext = Variable_attributeContext;
class RelationContext extends ParserRuleContext_1.ParserRuleContext {
    role_player(i) {
        if (i === undefined) {
            return this.getRuleContexts(Role_playerContext);
        }
        else {
            return this.getRuleContext(i, Role_playerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_relation; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelation) {
            listener.enterRelation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelation) {
            listener.exitRelation(this);
        }
    }
}
exports.RelationContext = RelationContext;
class Role_playerContext extends ParserRuleContext_1.ParserRuleContext {
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    player() {
        return this.getRuleContext(0, PlayerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_role_player; }
    // @Override
    enterRule(listener) {
        if (listener.enterRole_player) {
            listener.enterRole_player(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRole_player) {
            listener.exitRole_player(this);
        }
    }
}
exports.Role_playerContext = Role_playerContext;
class PlayerContext extends ParserRuleContext_1.ParserRuleContext {
    VAR_() { return this.getToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_player; }
    // @Override
    enterRule(listener) {
        if (listener.enterPlayer) {
            listener.enterPlayer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPlayer) {
            listener.exitPlayer(this);
        }
    }
}
exports.PlayerContext = PlayerContext;
class AttributesContext extends ParserRuleContext_1.ParserRuleContext {
    attribute(i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_attributes; }
    // @Override
    enterRule(listener) {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    }
}
exports.AttributesContext = AttributesContext;
class AttributeContext extends ParserRuleContext_1.ParserRuleContext {
    HAS() { return this.getToken(TypeQLParser.HAS, 0); }
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    predicate() {
        return this.tryGetRuleContext(0, PredicateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_attribute; }
    // @Override
    enterRule(listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    }
}
exports.AttributeContext = AttributeContext;
class PredicateContext extends ParserRuleContext_1.ParserRuleContext {
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    predicate_equality() {
        return this.tryGetRuleContext(0, Predicate_equalityContext);
    }
    predicate_value() {
        return this.tryGetRuleContext(0, Predicate_valueContext);
    }
    predicate_substring() {
        return this.tryGetRuleContext(0, Predicate_substringContext);
    }
    STRING_() { return this.tryGetToken(TypeQLParser.STRING_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_predicate; }
    // @Override
    enterRule(listener) {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    }
}
exports.PredicateContext = PredicateContext;
class Predicate_equalityContext extends ParserRuleContext_1.ParserRuleContext {
    EQ() { return this.tryGetToken(TypeQLParser.EQ, 0); }
    NEQ() { return this.tryGetToken(TypeQLParser.NEQ, 0); }
    GT() { return this.tryGetToken(TypeQLParser.GT, 0); }
    GTE() { return this.tryGetToken(TypeQLParser.GTE, 0); }
    LT() { return this.tryGetToken(TypeQLParser.LT, 0); }
    LTE() { return this.tryGetToken(TypeQLParser.LTE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_predicate_equality; }
    // @Override
    enterRule(listener) {
        if (listener.enterPredicate_equality) {
            listener.enterPredicate_equality(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredicate_equality) {
            listener.exitPredicate_equality(this);
        }
    }
}
exports.Predicate_equalityContext = Predicate_equalityContext;
class Predicate_substringContext extends ParserRuleContext_1.ParserRuleContext {
    CONTAINS() { return this.tryGetToken(TypeQLParser.CONTAINS, 0); }
    LIKE() { return this.tryGetToken(TypeQLParser.LIKE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_predicate_substring; }
    // @Override
    enterRule(listener) {
        if (listener.enterPredicate_substring) {
            listener.enterPredicate_substring(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredicate_substring) {
            listener.exitPredicate_substring(this);
        }
    }
}
exports.Predicate_substringContext = Predicate_substringContext;
class Predicate_valueContext extends ParserRuleContext_1.ParserRuleContext {
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_predicate_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterPredicate_value) {
            listener.enterPredicate_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredicate_value) {
            listener.exitPredicate_value(this);
        }
    }
}
exports.Predicate_valueContext = Predicate_valueContext;
class Schema_ruleContext extends ParserRuleContext_1.ParserRuleContext {
    RULE() { return this.getToken(TypeQLParser.RULE, 0); }
    label() {
        return this.getRuleContext(0, LabelContext);
    }
    WHEN() { return this.tryGetToken(TypeQLParser.WHEN, 0); }
    patterns() {
        return this.tryGetRuleContext(0, PatternsContext);
    }
    THEN() { return this.tryGetToken(TypeQLParser.THEN, 0); }
    variable_thing_any() {
        return this.tryGetRuleContext(0, Variable_thing_anyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_schema_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_rule) {
            listener.enterSchema_rule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_rule) {
            listener.exitSchema_rule(this);
        }
    }
}
exports.Schema_ruleContext = Schema_ruleContext;
class Type_anyContext extends ParserRuleContext_1.ParserRuleContext {
    type_scoped() {
        return this.tryGetRuleContext(0, Type_scopedContext);
    }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_type_any; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_any) {
            listener.enterType_any(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_any) {
            listener.exitType_any(this);
        }
    }
}
exports.Type_anyContext = Type_anyContext;
class Type_scopedContext extends ParserRuleContext_1.ParserRuleContext {
    label_scoped() {
        return this.tryGetRuleContext(0, Label_scopedContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_type_scoped; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_scoped) {
            listener.enterType_scoped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_scoped) {
            listener.exitType_scoped(this);
        }
    }
}
exports.Type_scopedContext = Type_scopedContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    VAR_() { return this.tryGetToken(TypeQLParser.VAR_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
}
exports.TypeContext = TypeContext;
class Label_anyContext extends ParserRuleContext_1.ParserRuleContext {
    label_scoped() {
        return this.tryGetRuleContext(0, Label_scopedContext);
    }
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_label_any; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabel_any) {
            listener.enterLabel_any(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabel_any) {
            listener.exitLabel_any(this);
        }
    }
}
exports.Label_anyContext = Label_anyContext;
class Label_scopedContext extends ParserRuleContext_1.ParserRuleContext {
    LABEL_SCOPED_() { return this.getToken(TypeQLParser.LABEL_SCOPED_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_label_scoped; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabel_scoped) {
            listener.enterLabel_scoped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabel_scoped) {
            listener.exitLabel_scoped(this);
        }
    }
}
exports.Label_scopedContext = Label_scopedContext;
class LabelContext extends ParserRuleContext_1.ParserRuleContext {
    LABEL_() { return this.tryGetToken(TypeQLParser.LABEL_, 0); }
    schema_native() {
        return this.tryGetRuleContext(0, Schema_nativeContext);
    }
    type_native() {
        return this.tryGetRuleContext(0, Type_nativeContext);
    }
    unreserved() {
        return this.tryGetRuleContext(0, UnreservedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_label; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    }
}
exports.LabelContext = LabelContext;
class Schema_nativeContext extends ParserRuleContext_1.ParserRuleContext {
    RULE() { return this.getToken(TypeQLParser.RULE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_schema_native; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_native) {
            listener.enterSchema_native(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_native) {
            listener.exitSchema_native(this);
        }
    }
}
exports.Schema_nativeContext = Schema_nativeContext;
class Type_nativeContext extends ParserRuleContext_1.ParserRuleContext {
    THING() { return this.tryGetToken(TypeQLParser.THING, 0); }
    ENTITY() { return this.tryGetToken(TypeQLParser.ENTITY, 0); }
    ATTRIBUTE() { return this.tryGetToken(TypeQLParser.ATTRIBUTE, 0); }
    RELATION() { return this.tryGetToken(TypeQLParser.RELATION, 0); }
    ROLE() { return this.tryGetToken(TypeQLParser.ROLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_type_native; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_native) {
            listener.enterType_native(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_native) {
            listener.exitType_native(this);
        }
    }
}
exports.Type_nativeContext = Type_nativeContext;
class Value_typeContext extends ParserRuleContext_1.ParserRuleContext {
    LONG() { return this.tryGetToken(TypeQLParser.LONG, 0); }
    DOUBLE() { return this.tryGetToken(TypeQLParser.DOUBLE, 0); }
    STRING() { return this.tryGetToken(TypeQLParser.STRING, 0); }
    BOOLEAN() { return this.tryGetToken(TypeQLParser.BOOLEAN, 0); }
    DATETIME() { return this.tryGetToken(TypeQLParser.DATETIME, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_value_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_type) {
            listener.enterValue_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_type) {
            listener.exitValue_type(this);
        }
    }
}
exports.Value_typeContext = Value_typeContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_() { return this.tryGetToken(TypeQLParser.STRING_, 0); }
    LONG_() { return this.tryGetToken(TypeQLParser.LONG_, 0); }
    DOUBLE_() { return this.tryGetToken(TypeQLParser.DOUBLE_, 0); }
    BOOLEAN_() { return this.tryGetToken(TypeQLParser.BOOLEAN_, 0); }
    DATE_() { return this.tryGetToken(TypeQLParser.DATE_, 0); }
    DATETIME_() { return this.tryGetToken(TypeQLParser.DATETIME_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
}
exports.ValueContext = ValueContext;
class RegexContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_() { return this.getToken(TypeQLParser.STRING_, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_regex; }
    // @Override
    enterRule(listener) {
        if (listener.enterRegex) {
            listener.enterRegex(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRegex) {
            listener.exitRegex(this);
        }
    }
}
exports.RegexContext = RegexContext;
class UnreservedContext extends ParserRuleContext_1.ParserRuleContext {
    VALUE() { return this.tryGetToken(TypeQLParser.VALUE, 0); }
    MIN() { return this.tryGetToken(TypeQLParser.MIN, 0); }
    MAX() { return this.tryGetToken(TypeQLParser.MAX, 0); }
    MEDIAN() { return this.tryGetToken(TypeQLParser.MEDIAN, 0); }
    MEAN() { return this.tryGetToken(TypeQLParser.MEAN, 0); }
    STD() { return this.tryGetToken(TypeQLParser.STD, 0); }
    SUM() { return this.tryGetToken(TypeQLParser.SUM, 0); }
    COUNT() { return this.tryGetToken(TypeQLParser.COUNT, 0); }
    GET() { return this.tryGetToken(TypeQLParser.GET, 0); }
    SORT() { return this.tryGetToken(TypeQLParser.SORT, 0); }
    LIMIT() { return this.tryGetToken(TypeQLParser.LIMIT, 0); }
    OFFSET() { return this.tryGetToken(TypeQLParser.OFFSET, 0); }
    GROUP() { return this.tryGetToken(TypeQLParser.GROUP, 0); }
    CONTAINS() { return this.tryGetToken(TypeQLParser.CONTAINS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypeQLParser.RULE_unreserved; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnreserved) {
            listener.enterUnreserved(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnreserved) {
            listener.exitUnreserved(this);
        }
    }
}
exports.UnreservedContext = UnreservedContext;
