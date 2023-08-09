// Generated from src/TypeQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TypeQLParser`.
 */
export interface TypeQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_query`.
	 * @param ctx the parse tree
	 */
	enterEof_query?: (ctx: Eof_queryContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_query`.
	 * @param ctx the parse tree
	 */
	exitEof_query?: (ctx: Eof_queryContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_queries`.
	 * @param ctx the parse tree
	 */
	enterEof_queries?: (ctx: Eof_queriesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_queries`.
	 * @param ctx the parse tree
	 */
	exitEof_queries?: (ctx: Eof_queriesContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_pattern`.
	 * @param ctx the parse tree
	 */
	enterEof_pattern?: (ctx: Eof_patternContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_pattern`.
	 * @param ctx the parse tree
	 */
	exitEof_pattern?: (ctx: Eof_patternContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_patterns`.
	 * @param ctx the parse tree
	 */
	enterEof_patterns?: (ctx: Eof_patternsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_patterns`.
	 * @param ctx the parse tree
	 */
	exitEof_patterns?: (ctx: Eof_patternsContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_definables`.
	 * @param ctx the parse tree
	 */
	enterEof_definables?: (ctx: Eof_definablesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_definables`.
	 * @param ctx the parse tree
	 */
	exitEof_definables?: (ctx: Eof_definablesContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_variable`.
	 * @param ctx the parse tree
	 */
	enterEof_variable?: (ctx: Eof_variableContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_variable`.
	 * @param ctx the parse tree
	 */
	exitEof_variable?: (ctx: Eof_variableContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_label`.
	 * @param ctx the parse tree
	 */
	enterEof_label?: (ctx: Eof_labelContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_label`.
	 * @param ctx the parse tree
	 */
	exitEof_label?: (ctx: Eof_labelContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.eof_schema_rule`.
	 * @param ctx the parse tree
	 */
	enterEof_schema_rule?: (ctx: Eof_schema_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.eof_schema_rule`.
	 * @param ctx the parse tree
	 */
	exitEof_schema_rule?: (ctx: Eof_schema_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_define`.
	 * @param ctx the parse tree
	 */
	enterQuery_define?: (ctx: Query_defineContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_define`.
	 * @param ctx the parse tree
	 */
	exitQuery_define?: (ctx: Query_defineContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_undefine`.
	 * @param ctx the parse tree
	 */
	enterQuery_undefine?: (ctx: Query_undefineContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_undefine`.
	 * @param ctx the parse tree
	 */
	exitQuery_undefine?: (ctx: Query_undefineContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_insert`.
	 * @param ctx the parse tree
	 */
	enterQuery_insert?: (ctx: Query_insertContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_insert`.
	 * @param ctx the parse tree
	 */
	exitQuery_insert?: (ctx: Query_insertContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_update`.
	 * @param ctx the parse tree
	 */
	enterQuery_update?: (ctx: Query_updateContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_update`.
	 * @param ctx the parse tree
	 */
	exitQuery_update?: (ctx: Query_updateContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_delete`.
	 * @param ctx the parse tree
	 */
	enterQuery_delete?: (ctx: Query_deleteContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_delete`.
	 * @param ctx the parse tree
	 */
	exitQuery_delete?: (ctx: Query_deleteContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_match`.
	 * @param ctx the parse tree
	 */
	enterQuery_match?: (ctx: Query_matchContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_match`.
	 * @param ctx the parse tree
	 */
	exitQuery_match?: (ctx: Query_matchContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_match_aggregate`.
	 * @param ctx the parse tree
	 */
	enterQuery_match_aggregate?: (ctx: Query_match_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_match_aggregate`.
	 * @param ctx the parse tree
	 */
	exitQuery_match_aggregate?: (ctx: Query_match_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_match_group`.
	 * @param ctx the parse tree
	 */
	enterQuery_match_group?: (ctx: Query_match_groupContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_match_group`.
	 * @param ctx the parse tree
	 */
	exitQuery_match_group?: (ctx: Query_match_groupContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.query_match_group_agg`.
	 * @param ctx the parse tree
	 */
	enterQuery_match_group_agg?: (ctx: Query_match_group_aggContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.query_match_group_agg`.
	 * @param ctx the parse tree
	 */
	exitQuery_match_group_agg?: (ctx: Query_match_group_aggContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.sort`.
	 * @param ctx the parse tree
	 */
	enterSort?: (ctx: SortContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.sort`.
	 * @param ctx the parse tree
	 */
	exitSort?: (ctx: SortContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.var_order`.
	 * @param ctx the parse tree
	 */
	enterVar_order?: (ctx: Var_orderContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.var_order`.
	 * @param ctx the parse tree
	 */
	exitVar_order?: (ctx: Var_orderContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.limit`.
	 * @param ctx the parse tree
	 */
	enterLimit?: (ctx: LimitContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.limit`.
	 * @param ctx the parse tree
	 */
	exitLimit?: (ctx: LimitContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.match_aggregate`.
	 * @param ctx the parse tree
	 */
	enterMatch_aggregate?: (ctx: Match_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.match_aggregate`.
	 * @param ctx the parse tree
	 */
	exitMatch_aggregate?: (ctx: Match_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.aggregate_method`.
	 * @param ctx the parse tree
	 */
	enterAggregate_method?: (ctx: Aggregate_methodContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.aggregate_method`.
	 * @param ctx the parse tree
	 */
	exitAggregate_method?: (ctx: Aggregate_methodContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.match_group`.
	 * @param ctx the parse tree
	 */
	enterMatch_group?: (ctx: Match_groupContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.match_group`.
	 * @param ctx the parse tree
	 */
	exitMatch_group?: (ctx: Match_groupContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.definables`.
	 * @param ctx the parse tree
	 */
	enterDefinables?: (ctx: DefinablesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.definables`.
	 * @param ctx the parse tree
	 */
	exitDefinables?: (ctx: DefinablesContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.definable`.
	 * @param ctx the parse tree
	 */
	enterDefinable?: (ctx: DefinableContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.definable`.
	 * @param ctx the parse tree
	 */
	exitDefinable?: (ctx: DefinableContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.patterns`.
	 * @param ctx the parse tree
	 */
	enterPatterns?: (ctx: PatternsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.patterns`.
	 * @param ctx the parse tree
	 */
	exitPatterns?: (ctx: PatternsContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.pattern_conjunction`.
	 * @param ctx the parse tree
	 */
	enterPattern_conjunction?: (ctx: Pattern_conjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.pattern_conjunction`.
	 * @param ctx the parse tree
	 */
	exitPattern_conjunction?: (ctx: Pattern_conjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.pattern_disjunction`.
	 * @param ctx the parse tree
	 */
	enterPattern_disjunction?: (ctx: Pattern_disjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.pattern_disjunction`.
	 * @param ctx the parse tree
	 */
	exitPattern_disjunction?: (ctx: Pattern_disjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.pattern_negation`.
	 * @param ctx the parse tree
	 */
	enterPattern_negation?: (ctx: Pattern_negationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.pattern_negation`.
	 * @param ctx the parse tree
	 */
	exitPattern_negation?: (ctx: Pattern_negationContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.pattern_variable`.
	 * @param ctx the parse tree
	 */
	enterPattern_variable?: (ctx: Pattern_variableContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.pattern_variable`.
	 * @param ctx the parse tree
	 */
	exitPattern_variable?: (ctx: Pattern_variableContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_concept`.
	 * @param ctx the parse tree
	 */
	enterVariable_concept?: (ctx: Variable_conceptContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_concept`.
	 * @param ctx the parse tree
	 */
	exitVariable_concept?: (ctx: Variable_conceptContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_type?: (ctx: Variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_type?: (ctx: Variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.type_constraint`.
	 * @param ctx the parse tree
	 */
	enterType_constraint?: (ctx: Type_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.type_constraint`.
	 * @param ctx the parse tree
	 */
	exitType_constraint?: (ctx: Type_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_things`.
	 * @param ctx the parse tree
	 */
	enterVariable_things?: (ctx: Variable_thingsContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_things`.
	 * @param ctx the parse tree
	 */
	exitVariable_things?: (ctx: Variable_thingsContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_thing_any`.
	 * @param ctx the parse tree
	 */
	enterVariable_thing_any?: (ctx: Variable_thing_anyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_thing_any`.
	 * @param ctx the parse tree
	 */
	exitVariable_thing_any?: (ctx: Variable_thing_anyContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_thing`.
	 * @param ctx the parse tree
	 */
	enterVariable_thing?: (ctx: Variable_thingContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_thing`.
	 * @param ctx the parse tree
	 */
	exitVariable_thing?: (ctx: Variable_thingContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_relation`.
	 * @param ctx the parse tree
	 */
	enterVariable_relation?: (ctx: Variable_relationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_relation`.
	 * @param ctx the parse tree
	 */
	exitVariable_relation?: (ctx: Variable_relationContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.variable_attribute`.
	 * @param ctx the parse tree
	 */
	enterVariable_attribute?: (ctx: Variable_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.variable_attribute`.
	 * @param ctx the parse tree
	 */
	exitVariable_attribute?: (ctx: Variable_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.role_player`.
	 * @param ctx the parse tree
	 */
	enterRole_player?: (ctx: Role_playerContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.role_player`.
	 * @param ctx the parse tree
	 */
	exitRole_player?: (ctx: Role_playerContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.player`.
	 * @param ctx the parse tree
	 */
	enterPlayer?: (ctx: PlayerContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.player`.
	 * @param ctx the parse tree
	 */
	exitPlayer?: (ctx: PlayerContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.predicate_equality`.
	 * @param ctx the parse tree
	 */
	enterPredicate_equality?: (ctx: Predicate_equalityContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.predicate_equality`.
	 * @param ctx the parse tree
	 */
	exitPredicate_equality?: (ctx: Predicate_equalityContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.predicate_substring`.
	 * @param ctx the parse tree
	 */
	enterPredicate_substring?: (ctx: Predicate_substringContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.predicate_substring`.
	 * @param ctx the parse tree
	 */
	exitPredicate_substring?: (ctx: Predicate_substringContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.predicate_value`.
	 * @param ctx the parse tree
	 */
	enterPredicate_value?: (ctx: Predicate_valueContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.predicate_value`.
	 * @param ctx the parse tree
	 */
	exitPredicate_value?: (ctx: Predicate_valueContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.schema_rule`.
	 * @param ctx the parse tree
	 */
	enterSchema_rule?: (ctx: Schema_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.schema_rule`.
	 * @param ctx the parse tree
	 */
	exitSchema_rule?: (ctx: Schema_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.type_any`.
	 * @param ctx the parse tree
	 */
	enterType_any?: (ctx: Type_anyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.type_any`.
	 * @param ctx the parse tree
	 */
	exitType_any?: (ctx: Type_anyContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.type_scoped`.
	 * @param ctx the parse tree
	 */
	enterType_scoped?: (ctx: Type_scopedContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.type_scoped`.
	 * @param ctx the parse tree
	 */
	exitType_scoped?: (ctx: Type_scopedContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.label_any`.
	 * @param ctx the parse tree
	 */
	enterLabel_any?: (ctx: Label_anyContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.label_any`.
	 * @param ctx the parse tree
	 */
	exitLabel_any?: (ctx: Label_anyContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.label_scoped`.
	 * @param ctx the parse tree
	 */
	enterLabel_scoped?: (ctx: Label_scopedContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.label_scoped`.
	 * @param ctx the parse tree
	 */
	exitLabel_scoped?: (ctx: Label_scopedContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.schema_native`.
	 * @param ctx the parse tree
	 */
	enterSchema_native?: (ctx: Schema_nativeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.schema_native`.
	 * @param ctx the parse tree
	 */
	exitSchema_native?: (ctx: Schema_nativeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.type_native`.
	 * @param ctx the parse tree
	 */
	enterType_native?: (ctx: Type_nativeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.type_native`.
	 * @param ctx the parse tree
	 */
	exitType_native?: (ctx: Type_nativeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterValue_type?: (ctx: Value_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitValue_type?: (ctx: Value_typeContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.regex`.
	 * @param ctx the parse tree
	 */
	enterRegex?: (ctx: RegexContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.regex`.
	 * @param ctx the parse tree
	 */
	exitRegex?: (ctx: RegexContext) => void;

	/**
	 * Enter a parse tree produced by `TypeQLParser.unreserved`.
	 * @param ctx the parse tree
	 */
	enterUnreserved?: (ctx: UnreservedContext) => void;
	/**
	 * Exit a parse tree produced by `TypeQLParser.unreserved`.
	 * @param ctx the parse tree
	 */
	exitUnreserved?: (ctx: UnreservedContext) => void;
}

