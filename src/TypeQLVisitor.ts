// Generated from src/TypeQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Eof_queryContext } from "./TypeQLParser";
import { Eof_queriesContext } from "./TypeQLParser";
import { Eof_patternContext } from "./TypeQLParser";
import { Eof_patternsContext } from "./TypeQLParser";
import { Eof_definablesContext } from "./TypeQLParser";
import { Eof_variableContext } from "./TypeQLParser";
import { Eof_labelContext } from "./TypeQLParser";
import { Eof_schema_ruleContext } from "./TypeQLParser";
import { QueryContext } from "./TypeQLParser";
import { Query_defineContext } from "./TypeQLParser";
import { Query_undefineContext } from "./TypeQLParser";
import { Query_insertContext } from "./TypeQLParser";
import { Query_updateContext } from "./TypeQLParser";
import { Query_deleteContext } from "./TypeQLParser";
import { Query_matchContext } from "./TypeQLParser";
import { Query_match_aggregateContext } from "./TypeQLParser";
import { Query_match_groupContext } from "./TypeQLParser";
import { Query_match_group_aggContext } from "./TypeQLParser";
import { ModifiersContext } from "./TypeQLParser";
import { FilterContext } from "./TypeQLParser";
import { SortContext } from "./TypeQLParser";
import { Var_orderContext } from "./TypeQLParser";
import { OffsetContext } from "./TypeQLParser";
import { LimitContext } from "./TypeQLParser";
import { Match_aggregateContext } from "./TypeQLParser";
import { Aggregate_methodContext } from "./TypeQLParser";
import { Match_groupContext } from "./TypeQLParser";
import { DefinablesContext } from "./TypeQLParser";
import { DefinableContext } from "./TypeQLParser";
import { PatternsContext } from "./TypeQLParser";
import { PatternContext } from "./TypeQLParser";
import { Pattern_conjunctionContext } from "./TypeQLParser";
import { Pattern_disjunctionContext } from "./TypeQLParser";
import { Pattern_negationContext } from "./TypeQLParser";
import { Pattern_variableContext } from "./TypeQLParser";
import { Variable_conceptContext } from "./TypeQLParser";
import { Variable_typeContext } from "./TypeQLParser";
import { Type_constraintContext } from "./TypeQLParser";
import { Variable_thingsContext } from "./TypeQLParser";
import { Variable_thing_anyContext } from "./TypeQLParser";
import { Variable_thingContext } from "./TypeQLParser";
import { Variable_relationContext } from "./TypeQLParser";
import { Variable_attributeContext } from "./TypeQLParser";
import { RelationContext } from "./TypeQLParser";
import { Role_playerContext } from "./TypeQLParser";
import { PlayerContext } from "./TypeQLParser";
import { AttributesContext } from "./TypeQLParser";
import { AttributeContext } from "./TypeQLParser";
import { PredicateContext } from "./TypeQLParser";
import { Predicate_equalityContext } from "./TypeQLParser";
import { Predicate_substringContext } from "./TypeQLParser";
import { Predicate_valueContext } from "./TypeQLParser";
import { Schema_ruleContext } from "./TypeQLParser";
import { Type_anyContext } from "./TypeQLParser";
import { Type_scopedContext } from "./TypeQLParser";
import { TypeContext } from "./TypeQLParser";
import { Label_anyContext } from "./TypeQLParser";
import { Label_scopedContext } from "./TypeQLParser";
import { LabelContext } from "./TypeQLParser";
import { Schema_nativeContext } from "./TypeQLParser";
import { Type_nativeContext } from "./TypeQLParser";
import { Value_typeContext } from "./TypeQLParser";
import { ValueContext } from "./TypeQLParser";
import { RegexContext } from "./TypeQLParser";
import { UnreservedContext } from "./TypeQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypeQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TypeQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_query?: (ctx: Eof_queryContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_queries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_queries?: (ctx: Eof_queriesContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_pattern?: (ctx: Eof_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_patterns?: (ctx: Eof_patternsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_definables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_definables?: (ctx: Eof_definablesContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_variable?: (ctx: Eof_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_label?: (ctx: Eof_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.eof_schema_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof_schema_rule?: (ctx: Eof_schema_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_define?: (ctx: Query_defineContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_undefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_undefine?: (ctx: Query_undefineContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_insert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_insert?: (ctx: Query_insertContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_update`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_update?: (ctx: Query_updateContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_delete?: (ctx: Query_deleteContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_match`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_match?: (ctx: Query_matchContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_match_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_match_aggregate?: (ctx: Query_match_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_match_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_match_group?: (ctx: Query_match_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.query_match_group_agg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_match_group_agg?: (ctx: Query_match_group_aggContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.sort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSort?: (ctx: SortContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.var_order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_order?: (ctx: Var_orderContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.limit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimit?: (ctx: LimitContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.match_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_aggregate?: (ctx: Match_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.aggregate_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_method?: (ctx: Aggregate_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.match_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_group?: (ctx: Match_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.definables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinables?: (ctx: DefinablesContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.definable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinable?: (ctx: DefinableContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.patterns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatterns?: (ctx: PatternsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.pattern_conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_conjunction?: (ctx: Pattern_conjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.pattern_disjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_disjunction?: (ctx: Pattern_disjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.pattern_negation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_negation?: (ctx: Pattern_negationContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.pattern_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_variable?: (ctx: Pattern_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_concept`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_concept?: (ctx: Variable_conceptContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_type?: (ctx: Variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.type_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_constraint?: (ctx: Type_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_things`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_things?: (ctx: Variable_thingsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_thing_any`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_thing_any?: (ctx: Variable_thing_anyContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_thing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_thing?: (ctx: Variable_thingContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_relation?: (ctx: Variable_relationContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.variable_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_attribute?: (ctx: Variable_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.role_player`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRole_player?: (ctx: Role_playerContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.player`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayer?: (ctx: PlayerContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.predicate_equality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate_equality?: (ctx: Predicate_equalityContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.predicate_substring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate_substring?: (ctx: Predicate_substringContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.predicate_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate_value?: (ctx: Predicate_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.schema_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_rule?: (ctx: Schema_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.type_any`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_any?: (ctx: Type_anyContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.type_scoped`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_scoped?: (ctx: Type_scopedContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.label_any`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_any?: (ctx: Label_anyContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.label_scoped`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_scoped?: (ctx: Label_scopedContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.schema_native`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_native?: (ctx: Schema_nativeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.type_native`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_native?: (ctx: Type_nativeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.value_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_type?: (ctx: Value_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.regex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegex?: (ctx: RegexContext) => Result;

	/**
	 * Visit a parse tree produced by `TypeQLParser.unreserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnreserved?: (ctx: UnreservedContext) => Result;
}

