import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ImagesScalarFieldEnumSchema = z.enum(['image_id','link','descr']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const Random1ScalarFieldEnumSchema = z.enum(['id','task','checked']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TestdocumentScalarFieldEnumSchema = z.enum(['doc_id','experiment_name','type','createdtime','x_position','y_position','width','height']);

export const TodolistScalarFieldEnumSchema = z.enum(['doc_id','item_id','checked','task']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// IMAGES SCHEMA
/////////////////////////////////////////

export const ImagesSchema = z.object({
  image_id: z.number().int().gte(-2147483648).lte(2147483647),
  link: z.string().nullable(),
  descr: z.string().nullable(),
})

export type Images = z.infer<typeof ImagesSchema>

/////////////////////////////////////////
// RANDOM 1 SCHEMA
/////////////////////////////////////////

export const Random1Schema = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647),
  task: z.string(),
  checked: z.number().int().gte(-2147483648).lte(2147483647),
})

export type Random1 = z.infer<typeof Random1Schema>

/////////////////////////////////////////
// TESTDOCUMENT SCHEMA
/////////////////////////////////////////

export const TestdocumentSchema = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  experiment_name: z.string(),
  type: z.string().nullable(),
  createdtime: z.string(),
  x_position: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  y_position: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
})

export type Testdocument = z.infer<typeof TestdocumentSchema>

/////////////////////////////////////////
// TODOLIST SCHEMA
/////////////////////////////////////////

export const TodolistSchema = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  item_id: z.number().int().gte(-2147483648).lte(2147483647),
  checked: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  task: z.string().nullable(),
})

export type Todolist = z.infer<typeof TodolistSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// IMAGES
//------------------------------------------------------

export const ImagesIncludeSchema: z.ZodType<Prisma.ImagesInclude> = z.object({
  testdocument: z.union([z.boolean(),z.lazy(() => TestdocumentArgsSchema)]).optional(),
}).strict()

export const ImagesArgsSchema: z.ZodType<Prisma.ImagesArgs> = z.object({
  select: z.lazy(() => ImagesSelectSchema).optional(),
  include: z.lazy(() => ImagesIncludeSchema).optional(),
}).strict();

export const ImagesSelectSchema: z.ZodType<Prisma.ImagesSelect> = z.object({
  image_id: z.boolean().optional(),
  link: z.boolean().optional(),
  descr: z.boolean().optional(),
  testdocument: z.union([z.boolean(),z.lazy(() => TestdocumentArgsSchema)]).optional(),
}).strict()

// RANDOM 1
//------------------------------------------------------

export const Random1SelectSchema: z.ZodType<Prisma.Random1Select> = z.object({
  id: z.boolean().optional(),
  task: z.boolean().optional(),
  checked: z.boolean().optional(),
}).strict()

// TESTDOCUMENT
//------------------------------------------------------

export const TestdocumentIncludeSchema: z.ZodType<Prisma.TestdocumentInclude> = z.object({
  images: z.union([z.boolean(),z.lazy(() => ImagesArgsSchema)]).optional(),
  todolist: z.union([z.boolean(),z.lazy(() => TodolistFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestdocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestdocumentArgsSchema: z.ZodType<Prisma.TestdocumentArgs> = z.object({
  select: z.lazy(() => TestdocumentSelectSchema).optional(),
  include: z.lazy(() => TestdocumentIncludeSchema).optional(),
}).strict();

export const TestdocumentCountOutputTypeArgsSchema: z.ZodType<Prisma.TestdocumentCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TestdocumentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TestdocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.TestdocumentCountOutputTypeSelect> = z.object({
  todolist: z.boolean().optional(),
}).strict();

export const TestdocumentSelectSchema: z.ZodType<Prisma.TestdocumentSelect> = z.object({
  doc_id: z.boolean().optional(),
  experiment_name: z.boolean().optional(),
  type: z.boolean().optional(),
  createdtime: z.boolean().optional(),
  x_position: z.boolean().optional(),
  y_position: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  images: z.union([z.boolean(),z.lazy(() => ImagesArgsSchema)]).optional(),
  todolist: z.union([z.boolean(),z.lazy(() => TodolistFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestdocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TODOLIST
//------------------------------------------------------

export const TodolistIncludeSchema: z.ZodType<Prisma.TodolistInclude> = z.object({
  testdocument: z.union([z.boolean(),z.lazy(() => TestdocumentArgsSchema)]).optional(),
}).strict()

export const TodolistArgsSchema: z.ZodType<Prisma.TodolistArgs> = z.object({
  select: z.lazy(() => TodolistSelectSchema).optional(),
  include: z.lazy(() => TodolistIncludeSchema).optional(),
}).strict();

export const TodolistSelectSchema: z.ZodType<Prisma.TodolistSelect> = z.object({
  doc_id: z.boolean().optional(),
  item_id: z.boolean().optional(),
  checked: z.boolean().optional(),
  task: z.boolean().optional(),
  testdocument: z.union([z.boolean(),z.lazy(() => TestdocumentArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ImagesWhereInputSchema: z.ZodType<Prisma.ImagesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImagesWhereInputSchema),z.lazy(() => ImagesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImagesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImagesWhereInputSchema),z.lazy(() => ImagesWhereInputSchema).array() ]).optional(),
  image_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  link: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  descr: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  testdocument: z.union([ z.lazy(() => TestdocumentRelationFilterSchema),z.lazy(() => TestdocumentWhereInputSchema) ]).optional(),
}).strict();

export const ImagesOrderByWithRelationInputSchema: z.ZodType<Prisma.ImagesOrderByWithRelationInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  descr: z.lazy(() => SortOrderSchema).optional(),
  testdocument: z.lazy(() => TestdocumentOrderByWithRelationInputSchema).optional()
}).strict();

export const ImagesWhereUniqueInputSchema: z.ZodType<Prisma.ImagesWhereUniqueInput> = z.object({
  image_id: z.number().int().gte(-2147483648).lte(2147483647).optional()
}).strict();

export const ImagesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImagesOrderByWithAggregationInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  descr: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImagesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ImagesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImagesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImagesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ImagesSumOrderByAggregateInputSchema).optional()
}).strict();

export const ImagesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImagesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImagesScalarWhereWithAggregatesInputSchema),z.lazy(() => ImagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImagesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImagesScalarWhereWithAggregatesInputSchema),z.lazy(() => ImagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  image_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  link: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  descr: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Random1WhereInputSchema: z.ZodType<Prisma.Random1WhereInput> = z.object({
  AND: z.union([ z.lazy(() => Random1WhereInputSchema),z.lazy(() => Random1WhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Random1WhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Random1WhereInputSchema),z.lazy(() => Random1WhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  checked: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const Random1OrderByWithRelationInputSchema: z.ZodType<Prisma.Random1OrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Random1WhereUniqueInputSchema: z.ZodType<Prisma.Random1WhereUniqueInput> = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647).optional()
}).strict();

export const Random1OrderByWithAggregationInputSchema: z.ZodType<Prisma.Random1OrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Random1CountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Random1AvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Random1MaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Random1MinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Random1SumOrderByAggregateInputSchema).optional()
}).strict();

export const Random1ScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Random1ScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Random1ScalarWhereWithAggregatesInputSchema),z.lazy(() => Random1ScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Random1ScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Random1ScalarWhereWithAggregatesInputSchema),z.lazy(() => Random1ScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  checked: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const TestdocumentWhereInputSchema: z.ZodType<Prisma.TestdocumentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestdocumentWhereInputSchema),z.lazy(() => TestdocumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestdocumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestdocumentWhereInputSchema),z.lazy(() => TestdocumentWhereInputSchema).array() ]).optional(),
  doc_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  experiment_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdtime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  x_position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  y_position: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  width: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  images: z.union([ z.lazy(() => ImagesRelationFilterSchema),z.lazy(() => ImagesWhereInputSchema) ]).optional().nullable(),
  todolist: z.lazy(() => TodolistListRelationFilterSchema).optional()
}).strict();

export const TestdocumentOrderByWithRelationInputSchema: z.ZodType<Prisma.TestdocumentOrderByWithRelationInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  experiment_name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdtime: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => ImagesOrderByWithRelationInputSchema).optional(),
  todolist: z.lazy(() => TodolistOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TestdocumentWhereUniqueInputSchema: z.ZodType<Prisma.TestdocumentWhereUniqueInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647).optional()
}).strict();

export const TestdocumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestdocumentOrderByWithAggregationInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  experiment_name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdtime: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestdocumentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestdocumentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestdocumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestdocumentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestdocumentSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestdocumentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestdocumentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestdocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => TestdocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestdocumentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestdocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => TestdocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  doc_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  experiment_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdtime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  x_position: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  y_position: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  width: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const TodolistWhereInputSchema: z.ZodType<Prisma.TodolistWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TodolistWhereInputSchema),z.lazy(() => TodolistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodolistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodolistWhereInputSchema),z.lazy(() => TodolistWhereInputSchema).array() ]).optional(),
  doc_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  checked: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  task: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  testdocument: z.union([ z.lazy(() => TestdocumentRelationFilterSchema),z.lazy(() => TestdocumentWhereInputSchema) ]).optional(),
}).strict();

export const TodolistOrderByWithRelationInputSchema: z.ZodType<Prisma.TodolistOrderByWithRelationInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  testdocument: z.lazy(() => TestdocumentOrderByWithRelationInputSchema).optional()
}).strict();

export const TodolistWhereUniqueInputSchema: z.ZodType<Prisma.TodolistWhereUniqueInput> = z.object({
  item_id: z.number().int().gte(-2147483648).lte(2147483647).optional()
}).strict();

export const TodolistOrderByWithAggregationInputSchema: z.ZodType<Prisma.TodolistOrderByWithAggregationInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TodolistCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TodolistAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TodolistMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TodolistMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TodolistSumOrderByAggregateInputSchema).optional()
}).strict();

export const TodolistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TodolistScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TodolistScalarWhereWithAggregatesInputSchema),z.lazy(() => TodolistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodolistScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodolistScalarWhereWithAggregatesInputSchema),z.lazy(() => TodolistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  doc_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  checked: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  task: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ImagesCreateInputSchema: z.ZodType<Prisma.ImagesCreateInput> = z.object({
  link: z.string().optional().nullable(),
  descr: z.string().optional().nullable(),
  testdocument: z.lazy(() => TestdocumentCreateNestedOneWithoutImagesInputSchema)
}).strict();

export const ImagesUncheckedCreateInputSchema: z.ZodType<Prisma.ImagesUncheckedCreateInput> = z.object({
  image_id: z.number().int().gte(-2147483648).lte(2147483647),
  link: z.string().optional().nullable(),
  descr: z.string().optional().nullable()
}).strict();

export const ImagesUpdateInputSchema: z.ZodType<Prisma.ImagesUpdateInput> = z.object({
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testdocument: z.lazy(() => TestdocumentUpdateOneRequiredWithoutImagesNestedInputSchema).optional()
}).strict();

export const ImagesUncheckedUpdateInputSchema: z.ZodType<Prisma.ImagesUncheckedUpdateInput> = z.object({
  image_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ImagesCreateManyInputSchema: z.ZodType<Prisma.ImagesCreateManyInput> = z.object({
  image_id: z.number().int().gte(-2147483648).lte(2147483647),
  link: z.string().optional().nullable(),
  descr: z.string().optional().nullable()
}).strict();

export const ImagesUpdateManyMutationInputSchema: z.ZodType<Prisma.ImagesUpdateManyMutationInput> = z.object({
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ImagesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImagesUncheckedUpdateManyInput> = z.object({
  image_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Random1CreateInputSchema: z.ZodType<Prisma.Random1CreateInput> = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647),
  task: z.string(),
  checked: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const Random1UncheckedCreateInputSchema: z.ZodType<Prisma.Random1UncheckedCreateInput> = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647),
  task: z.string(),
  checked: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const Random1UpdateInputSchema: z.ZodType<Prisma.Random1UpdateInput> = z.object({
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Random1UncheckedUpdateInputSchema: z.ZodType<Prisma.Random1UncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Random1CreateManyInputSchema: z.ZodType<Prisma.Random1CreateManyInput> = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647),
  task: z.string(),
  checked: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const Random1UpdateManyMutationInputSchema: z.ZodType<Prisma.Random1UpdateManyMutationInput> = z.object({
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Random1UncheckedUpdateManyInputSchema: z.ZodType<Prisma.Random1UncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestdocumentCreateInputSchema: z.ZodType<Prisma.TestdocumentCreateInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  y_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  images: z.lazy(() => ImagesCreateNestedOneWithoutTestdocumentInputSchema).optional(),
  todolist: z.lazy(() => TodolistCreateNestedManyWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentUncheckedCreateInputSchema: z.ZodType<Prisma.TestdocumentUncheckedCreateInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  y_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  images: z.lazy(() => ImagesUncheckedCreateNestedOneWithoutTestdocumentInputSchema).optional(),
  todolist: z.lazy(() => TodolistUncheckedCreateNestedManyWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentUpdateInputSchema: z.ZodType<Prisma.TestdocumentUpdateInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.lazy(() => ImagesUpdateOneWithoutTestdocumentNestedInputSchema).optional(),
  todolist: z.lazy(() => TodolistUpdateManyWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const TestdocumentUncheckedUpdateInputSchema: z.ZodType<Prisma.TestdocumentUncheckedUpdateInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.lazy(() => ImagesUncheckedUpdateOneWithoutTestdocumentNestedInputSchema).optional(),
  todolist: z.lazy(() => TodolistUncheckedUpdateManyWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const TestdocumentCreateManyInputSchema: z.ZodType<Prisma.TestdocumentCreateManyInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  y_position: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const TestdocumentUpdateManyMutationInputSchema: z.ZodType<Prisma.TestdocumentUpdateManyMutationInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TestdocumentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestdocumentUncheckedUpdateManyInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistCreateInputSchema: z.ZodType<Prisma.TodolistCreateInput> = z.object({
  item_id: z.number().int().gte(-2147483648).lte(2147483647),
  checked: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  task: z.string().optional().nullable(),
  testdocument: z.lazy(() => TestdocumentCreateNestedOneWithoutTodolistInputSchema)
}).strict();

export const TodolistUncheckedCreateInputSchema: z.ZodType<Prisma.TodolistUncheckedCreateInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  item_id: z.number().int().gte(-2147483648).lte(2147483647),
  checked: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  task: z.string().optional().nullable()
}).strict();

export const TodolistUpdateInputSchema: z.ZodType<Prisma.TodolistUpdateInput> = z.object({
  item_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  testdocument: z.lazy(() => TestdocumentUpdateOneRequiredWithoutTodolistNestedInputSchema).optional()
}).strict();

export const TodolistUncheckedUpdateInputSchema: z.ZodType<Prisma.TodolistUncheckedUpdateInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistCreateManyInputSchema: z.ZodType<Prisma.TodolistCreateManyInput> = z.object({
  doc_id: z.number().int().gte(-2147483648).lte(2147483647),
  item_id: z.number().int().gte(-2147483648).lte(2147483647),
  checked: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  task: z.string().optional().nullable()
}).strict();

export const TodolistUpdateManyMutationInputSchema: z.ZodType<Prisma.TodolistUpdateManyMutationInput> = z.object({
  item_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TodolistUncheckedUpdateManyInput> = z.object({
  doc_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const TestdocumentRelationFilterSchema: z.ZodType<Prisma.TestdocumentRelationFilter> = z.object({
  is: z.lazy(() => TestdocumentWhereInputSchema).optional(),
  isNot: z.lazy(() => TestdocumentWhereInputSchema).optional()
}).strict();

export const ImagesCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImagesCountOrderByAggregateInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  descr: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImagesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ImagesAvgOrderByAggregateInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImagesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImagesMaxOrderByAggregateInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  descr: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImagesMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImagesMinOrderByAggregateInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => SortOrderSchema).optional(),
  descr: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImagesSumOrderByAggregateInputSchema: z.ZodType<Prisma.ImagesSumOrderByAggregateInput> = z.object({
  image_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const Random1CountOrderByAggregateInputSchema: z.ZodType<Prisma.Random1CountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Random1AvgOrderByAggregateInputSchema: z.ZodType<Prisma.Random1AvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Random1MaxOrderByAggregateInputSchema: z.ZodType<Prisma.Random1MaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Random1MinOrderByAggregateInputSchema: z.ZodType<Prisma.Random1MinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Random1SumOrderByAggregateInputSchema: z.ZodType<Prisma.Random1SumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ImagesRelationFilterSchema: z.ZodType<Prisma.ImagesRelationFilter> = z.object({
  is: z.lazy(() => ImagesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ImagesWhereInputSchema).optional().nullable()
}).strict();

export const TodolistListRelationFilterSchema: z.ZodType<Prisma.TodolistListRelationFilter> = z.object({
  every: z.lazy(() => TodolistWhereInputSchema).optional(),
  some: z.lazy(() => TodolistWhereInputSchema).optional(),
  none: z.lazy(() => TodolistWhereInputSchema).optional()
}).strict();

export const TodolistOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TodolistOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestdocumentCountOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  experiment_name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdtime: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestdocumentAvgOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestdocumentMaxOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  experiment_name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdtime: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestdocumentMinOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  experiment_name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdtime: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestdocumentSumOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  x_position: z.lazy(() => SortOrderSchema).optional(),
  y_position: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const TodolistCountOrderByAggregateInputSchema: z.ZodType<Prisma.TodolistCountOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodolistAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TodolistAvgOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodolistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TodolistMaxOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodolistMinOrderByAggregateInputSchema: z.ZodType<Prisma.TodolistMinOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodolistSumOrderByAggregateInputSchema: z.ZodType<Prisma.TodolistSumOrderByAggregateInput> = z.object({
  doc_id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  checked: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestdocumentCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentCreateNestedOneWithoutImagesInput> = z.object({
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestdocumentCreateOrConnectWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => TestdocumentWhereUniqueInputSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const TestdocumentUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.TestdocumentUpdateOneRequiredWithoutImagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestdocumentCreateOrConnectWithoutImagesInputSchema).optional(),
  upsert: z.lazy(() => TestdocumentUpsertWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => TestdocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestdocumentUpdateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedUpdateWithoutImagesInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const ImagesCreateNestedOneWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesCreateNestedOneWithoutTestdocumentInput> = z.object({
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImagesCreateOrConnectWithoutTestdocumentInputSchema).optional(),
  connect: z.lazy(() => ImagesWhereUniqueInputSchema).optional()
}).strict();

export const TodolistCreateNestedManyWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistCreateNestedManyWithoutTestdocumentInput> = z.object({
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema).array(),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TodolistCreateManyTestdocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ImagesUncheckedCreateNestedOneWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesUncheckedCreateNestedOneWithoutTestdocumentInput> = z.object({
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImagesCreateOrConnectWithoutTestdocumentInputSchema).optional(),
  connect: z.lazy(() => ImagesWhereUniqueInputSchema).optional()
}).strict();

export const TodolistUncheckedCreateNestedManyWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUncheckedCreateNestedManyWithoutTestdocumentInput> = z.object({
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema).array(),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TodolistCreateManyTestdocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ImagesUpdateOneWithoutTestdocumentNestedInputSchema: z.ZodType<Prisma.ImagesUpdateOneWithoutTestdocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImagesCreateOrConnectWithoutTestdocumentInputSchema).optional(),
  upsert: z.lazy(() => ImagesUpsertWithoutTestdocumentInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ImagesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImagesUpdateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedUpdateWithoutTestdocumentInputSchema) ]).optional(),
}).strict();

export const TodolistUpdateManyWithoutTestdocumentNestedInputSchema: z.ZodType<Prisma.TodolistUpdateManyWithoutTestdocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema).array(),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TodolistUpsertWithWhereUniqueWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpsertWithWhereUniqueWithoutTestdocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TodolistCreateManyTestdocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TodolistUpdateWithWhereUniqueWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpdateWithWhereUniqueWithoutTestdocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TodolistUpdateManyWithWhereWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpdateManyWithWhereWithoutTestdocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TodolistScalarWhereInputSchema),z.lazy(() => TodolistScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ImagesUncheckedUpdateOneWithoutTestdocumentNestedInputSchema: z.ZodType<Prisma.ImagesUncheckedUpdateOneWithoutTestdocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImagesCreateOrConnectWithoutTestdocumentInputSchema).optional(),
  upsert: z.lazy(() => ImagesUpsertWithoutTestdocumentInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ImagesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImagesUpdateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedUpdateWithoutTestdocumentInputSchema) ]).optional(),
}).strict();

export const TodolistUncheckedUpdateManyWithoutTestdocumentNestedInputSchema: z.ZodType<Prisma.TodolistUncheckedUpdateManyWithoutTestdocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema).array(),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema),z.lazy(() => TodolistCreateOrConnectWithoutTestdocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TodolistUpsertWithWhereUniqueWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpsertWithWhereUniqueWithoutTestdocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TodolistCreateManyTestdocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TodolistWhereUniqueInputSchema),z.lazy(() => TodolistWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TodolistUpdateWithWhereUniqueWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpdateWithWhereUniqueWithoutTestdocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TodolistUpdateManyWithWhereWithoutTestdocumentInputSchema),z.lazy(() => TodolistUpdateManyWithWhereWithoutTestdocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TodolistScalarWhereInputSchema),z.lazy(() => TodolistScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestdocumentCreateNestedOneWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentCreateNestedOneWithoutTodolistInput> = z.object({
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutTodolistInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestdocumentCreateOrConnectWithoutTodolistInputSchema).optional(),
  connect: z.lazy(() => TestdocumentWhereUniqueInputSchema).optional()
}).strict();

export const TestdocumentUpdateOneRequiredWithoutTodolistNestedInputSchema: z.ZodType<Prisma.TestdocumentUpdateOneRequiredWithoutTodolistNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutTodolistInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestdocumentCreateOrConnectWithoutTodolistInputSchema).optional(),
  upsert: z.lazy(() => TestdocumentUpsertWithoutTodolistInputSchema).optional(),
  connect: z.lazy(() => TestdocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestdocumentUpdateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedUpdateWithoutTodolistInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const TestdocumentCreateWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentCreateWithoutImagesInput> = z.object({
  doc_id: z.number(),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().optional().nullable(),
  y_position: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  height: z.number().optional().nullable(),
  todolist: z.lazy(() => TodolistCreateNestedManyWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentUncheckedCreateWithoutImagesInput> = z.object({
  doc_id: z.number(),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().optional().nullable(),
  y_position: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  height: z.number().optional().nullable(),
  todolist: z.lazy(() => TodolistUncheckedCreateNestedManyWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentCreateOrConnectWithoutImagesInput> = z.object({
  where: z.lazy(() => TestdocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutImagesInputSchema) ]),
}).strict();

export const TestdocumentUpsertWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentUpsertWithoutImagesInput> = z.object({
  update: z.union([ z.lazy(() => TestdocumentUpdateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedUpdateWithoutImagesInputSchema) ]),
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutImagesInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutImagesInputSchema) ]),
}).strict();

export const TestdocumentUpdateWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentUpdateWithoutImagesInput> = z.object({
  doc_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  todolist: z.lazy(() => TodolistUpdateManyWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const TestdocumentUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.TestdocumentUncheckedUpdateWithoutImagesInput> = z.object({
  doc_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  todolist: z.lazy(() => TodolistUncheckedUpdateManyWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const ImagesCreateWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesCreateWithoutTestdocumentInput> = z.object({
  link: z.string().optional().nullable(),
  descr: z.string().optional().nullable()
}).strict();

export const ImagesUncheckedCreateWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesUncheckedCreateWithoutTestdocumentInput> = z.object({
  link: z.string().optional().nullable(),
  descr: z.string().optional().nullable()
}).strict();

export const ImagesCreateOrConnectWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesCreateOrConnectWithoutTestdocumentInput> = z.object({
  where: z.lazy(() => ImagesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]),
}).strict();

export const TodolistCreateWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistCreateWithoutTestdocumentInput> = z.object({
  item_id: z.number(),
  checked: z.number().optional().nullable(),
  task: z.string().optional().nullable()
}).strict();

export const TodolistUncheckedCreateWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUncheckedCreateWithoutTestdocumentInput> = z.object({
  item_id: z.number(),
  checked: z.number().optional().nullable(),
  task: z.string().optional().nullable()
}).strict();

export const TodolistCreateOrConnectWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistCreateOrConnectWithoutTestdocumentInput> = z.object({
  where: z.lazy(() => TodolistWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema) ]),
}).strict();

export const TodolistCreateManyTestdocumentInputEnvelopeSchema: z.ZodType<Prisma.TodolistCreateManyTestdocumentInputEnvelope> = z.object({
  data: z.lazy(() => TodolistCreateManyTestdocumentInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ImagesUpsertWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesUpsertWithoutTestdocumentInput> = z.object({
  update: z.union([ z.lazy(() => ImagesUpdateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedUpdateWithoutTestdocumentInputSchema) ]),
  create: z.union([ z.lazy(() => ImagesCreateWithoutTestdocumentInputSchema),z.lazy(() => ImagesUncheckedCreateWithoutTestdocumentInputSchema) ]),
}).strict();

export const ImagesUpdateWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesUpdateWithoutTestdocumentInput> = z.object({
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ImagesUncheckedUpdateWithoutTestdocumentInputSchema: z.ZodType<Prisma.ImagesUncheckedUpdateWithoutTestdocumentInput> = z.object({
  link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  descr: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistUpsertWithWhereUniqueWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUpsertWithWhereUniqueWithoutTestdocumentInput> = z.object({
  where: z.lazy(() => TodolistWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TodolistUpdateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedUpdateWithoutTestdocumentInputSchema) ]),
  create: z.union([ z.lazy(() => TodolistCreateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedCreateWithoutTestdocumentInputSchema) ]),
}).strict();

export const TodolistUpdateWithWhereUniqueWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUpdateWithWhereUniqueWithoutTestdocumentInput> = z.object({
  where: z.lazy(() => TodolistWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TodolistUpdateWithoutTestdocumentInputSchema),z.lazy(() => TodolistUncheckedUpdateWithoutTestdocumentInputSchema) ]),
}).strict();

export const TodolistUpdateManyWithWhereWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUpdateManyWithWhereWithoutTestdocumentInput> = z.object({
  where: z.lazy(() => TodolistScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TodolistUpdateManyMutationInputSchema),z.lazy(() => TodolistUncheckedUpdateManyWithoutTodolistInputSchema) ]),
}).strict();

export const TodolistScalarWhereInputSchema: z.ZodType<Prisma.TodolistScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TodolistScalarWhereInputSchema),z.lazy(() => TodolistScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodolistScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodolistScalarWhereInputSchema),z.lazy(() => TodolistScalarWhereInputSchema).array() ]).optional(),
  doc_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  item_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  checked: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  task: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TestdocumentCreateWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentCreateWithoutTodolistInput> = z.object({
  doc_id: z.number(),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().optional().nullable(),
  y_position: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  height: z.number().optional().nullable(),
  images: z.lazy(() => ImagesCreateNestedOneWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentUncheckedCreateWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentUncheckedCreateWithoutTodolistInput> = z.object({
  doc_id: z.number(),
  experiment_name: z.string(),
  type: z.string().optional().nullable(),
  createdtime: z.string(),
  x_position: z.number().optional().nullable(),
  y_position: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  height: z.number().optional().nullable(),
  images: z.lazy(() => ImagesUncheckedCreateNestedOneWithoutTestdocumentInputSchema).optional()
}).strict();

export const TestdocumentCreateOrConnectWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentCreateOrConnectWithoutTodolistInput> = z.object({
  where: z.lazy(() => TestdocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutTodolistInputSchema) ]),
}).strict();

export const TestdocumentUpsertWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentUpsertWithoutTodolistInput> = z.object({
  update: z.union([ z.lazy(() => TestdocumentUpdateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedUpdateWithoutTodolistInputSchema) ]),
  create: z.union([ z.lazy(() => TestdocumentCreateWithoutTodolistInputSchema),z.lazy(() => TestdocumentUncheckedCreateWithoutTodolistInputSchema) ]),
}).strict();

export const TestdocumentUpdateWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentUpdateWithoutTodolistInput> = z.object({
  doc_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.lazy(() => ImagesUpdateOneWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const TestdocumentUncheckedUpdateWithoutTodolistInputSchema: z.ZodType<Prisma.TestdocumentUncheckedUpdateWithoutTodolistInput> = z.object({
  doc_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  experiment_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdtime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  x_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  y_position: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.lazy(() => ImagesUncheckedUpdateOneWithoutTestdocumentNestedInputSchema).optional()
}).strict();

export const TodolistCreateManyTestdocumentInputSchema: z.ZodType<Prisma.TodolistCreateManyTestdocumentInput> = z.object({
  item_id: z.number().int().gte(-2147483648).lte(2147483647),
  checked: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  task: z.string().optional().nullable()
}).strict();

export const TodolistUpdateWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUpdateWithoutTestdocumentInput> = z.object({
  item_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistUncheckedUpdateWithoutTestdocumentInputSchema: z.ZodType<Prisma.TodolistUncheckedUpdateWithoutTestdocumentInput> = z.object({
  item_id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TodolistUncheckedUpdateManyWithoutTodolistInputSchema: z.ZodType<Prisma.TodolistUncheckedUpdateManyWithoutTodolistInput> = z.object({
  item_id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checked: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  task: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ImagesFindFirstArgsSchema: z.ZodType<Prisma.ImagesFindFirstArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereInputSchema.optional(),
  orderBy: z.union([ ImagesOrderByWithRelationInputSchema.array(),ImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: ImagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ImagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ImagesFindFirstArgs>

export const ImagesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImagesFindFirstOrThrowArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereInputSchema.optional(),
  orderBy: z.union([ ImagesOrderByWithRelationInputSchema.array(),ImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: ImagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ImagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ImagesFindFirstOrThrowArgs>

export const ImagesFindManyArgsSchema: z.ZodType<Prisma.ImagesFindManyArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereInputSchema.optional(),
  orderBy: z.union([ ImagesOrderByWithRelationInputSchema.array(),ImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: ImagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ImagesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ImagesFindManyArgs>

export const ImagesAggregateArgsSchema: z.ZodType<Prisma.ImagesAggregateArgs> = z.object({
  where: ImagesWhereInputSchema.optional(),
  orderBy: z.union([ ImagesOrderByWithRelationInputSchema.array(),ImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: ImagesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ImagesAggregateArgs>

export const ImagesGroupByArgsSchema: z.ZodType<Prisma.ImagesGroupByArgs> = z.object({
  where: ImagesWhereInputSchema.optional(),
  orderBy: z.union([ ImagesOrderByWithAggregationInputSchema.array(),ImagesOrderByWithAggregationInputSchema ]).optional(),
  by: ImagesScalarFieldEnumSchema.array(),
  having: ImagesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ImagesGroupByArgs>

export const ImagesFindUniqueArgsSchema: z.ZodType<Prisma.ImagesFindUniqueArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ImagesFindUniqueArgs>

export const ImagesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImagesFindUniqueOrThrowArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ImagesFindUniqueOrThrowArgs>

export const Random1FindFirstArgsSchema: z.ZodType<Prisma.Random1FindFirstArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereInputSchema.optional(),
  orderBy: z.union([ Random1OrderByWithRelationInputSchema.array(),Random1OrderByWithRelationInputSchema ]).optional(),
  cursor: Random1WhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Random1ScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Random1FindFirstOrThrowArgsSchema: z.ZodType<Prisma.Random1FindFirstOrThrowArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereInputSchema.optional(),
  orderBy: z.union([ Random1OrderByWithRelationInputSchema.array(),Random1OrderByWithRelationInputSchema ]).optional(),
  cursor: Random1WhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Random1ScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Random1FindManyArgsSchema: z.ZodType<Prisma.Random1FindManyArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereInputSchema.optional(),
  orderBy: z.union([ Random1OrderByWithRelationInputSchema.array(),Random1OrderByWithRelationInputSchema ]).optional(),
  cursor: Random1WhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Random1ScalarFieldEnumSchema.array().optional(),
}).strict() 

export const Random1AggregateArgsSchema: z.ZodType<Prisma.Random1AggregateArgs> = z.object({
  where: Random1WhereInputSchema.optional(),
  orderBy: z.union([ Random1OrderByWithRelationInputSchema.array(),Random1OrderByWithRelationInputSchema ]).optional(),
  cursor: Random1WhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const Random1GroupByArgsSchema: z.ZodType<Prisma.Random1GroupByArgs> = z.object({
  where: Random1WhereInputSchema.optional(),
  orderBy: z.union([ Random1OrderByWithAggregationInputSchema.array(),Random1OrderByWithAggregationInputSchema ]).optional(),
  by: Random1ScalarFieldEnumSchema.array(),
  having: Random1ScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const Random1FindUniqueArgsSchema: z.ZodType<Prisma.Random1FindUniqueArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereUniqueInputSchema,
}).strict() 

export const Random1FindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Random1FindUniqueOrThrowArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereUniqueInputSchema,
}).strict() 

export const TestdocumentFindFirstArgsSchema: z.ZodType<Prisma.TestdocumentFindFirstArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereInputSchema.optional(),
  orderBy: z.union([ TestdocumentOrderByWithRelationInputSchema.array(),TestdocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestdocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestdocumentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentFindFirstArgs>

export const TestdocumentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestdocumentFindFirstOrThrowArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereInputSchema.optional(),
  orderBy: z.union([ TestdocumentOrderByWithRelationInputSchema.array(),TestdocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestdocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestdocumentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentFindFirstOrThrowArgs>

export const TestdocumentFindManyArgsSchema: z.ZodType<Prisma.TestdocumentFindManyArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereInputSchema.optional(),
  orderBy: z.union([ TestdocumentOrderByWithRelationInputSchema.array(),TestdocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestdocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestdocumentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentFindManyArgs>

export const TestdocumentAggregateArgsSchema: z.ZodType<Prisma.TestdocumentAggregateArgs> = z.object({
  where: TestdocumentWhereInputSchema.optional(),
  orderBy: z.union([ TestdocumentOrderByWithRelationInputSchema.array(),TestdocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestdocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentAggregateArgs>

export const TestdocumentGroupByArgsSchema: z.ZodType<Prisma.TestdocumentGroupByArgs> = z.object({
  where: TestdocumentWhereInputSchema.optional(),
  orderBy: z.union([ TestdocumentOrderByWithAggregationInputSchema.array(),TestdocumentOrderByWithAggregationInputSchema ]).optional(),
  by: TestdocumentScalarFieldEnumSchema.array(),
  having: TestdocumentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentGroupByArgs>

export const TestdocumentFindUniqueArgsSchema: z.ZodType<Prisma.TestdocumentFindUniqueArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TestdocumentFindUniqueArgs>

export const TestdocumentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestdocumentFindUniqueOrThrowArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TestdocumentFindUniqueOrThrowArgs>

export const TodolistFindFirstArgsSchema: z.ZodType<Prisma.TodolistFindFirstArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereInputSchema.optional(),
  orderBy: z.union([ TodolistOrderByWithRelationInputSchema.array(),TodolistOrderByWithRelationInputSchema ]).optional(),
  cursor: TodolistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodolistScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TodolistFindFirstArgs>

export const TodolistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TodolistFindFirstOrThrowArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereInputSchema.optional(),
  orderBy: z.union([ TodolistOrderByWithRelationInputSchema.array(),TodolistOrderByWithRelationInputSchema ]).optional(),
  cursor: TodolistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodolistScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TodolistFindFirstOrThrowArgs>

export const TodolistFindManyArgsSchema: z.ZodType<Prisma.TodolistFindManyArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereInputSchema.optional(),
  orderBy: z.union([ TodolistOrderByWithRelationInputSchema.array(),TodolistOrderByWithRelationInputSchema ]).optional(),
  cursor: TodolistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodolistScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.TodolistFindManyArgs>

export const TodolistAggregateArgsSchema: z.ZodType<Prisma.TodolistAggregateArgs> = z.object({
  where: TodolistWhereInputSchema.optional(),
  orderBy: z.union([ TodolistOrderByWithRelationInputSchema.array(),TodolistOrderByWithRelationInputSchema ]).optional(),
  cursor: TodolistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodolistAggregateArgs>

export const TodolistGroupByArgsSchema: z.ZodType<Prisma.TodolistGroupByArgs> = z.object({
  where: TodolistWhereInputSchema.optional(),
  orderBy: z.union([ TodolistOrderByWithAggregationInputSchema.array(),TodolistOrderByWithAggregationInputSchema ]).optional(),
  by: TodolistScalarFieldEnumSchema.array(),
  having: TodolistScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TodolistGroupByArgs>

export const TodolistFindUniqueArgsSchema: z.ZodType<Prisma.TodolistFindUniqueArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodolistFindUniqueArgs>

export const TodolistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TodolistFindUniqueOrThrowArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodolistFindUniqueOrThrowArgs>

export const ImagesCreateArgsSchema: z.ZodType<Prisma.ImagesCreateArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  data: z.union([ ImagesCreateInputSchema,ImagesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ImagesCreateArgs>

export const ImagesUpsertArgsSchema: z.ZodType<Prisma.ImagesUpsertArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereUniqueInputSchema,
  create: z.union([ ImagesCreateInputSchema,ImagesUncheckedCreateInputSchema ]),
  update: z.union([ ImagesUpdateInputSchema,ImagesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ImagesUpsertArgs>

export const ImagesCreateManyArgsSchema: z.ZodType<Prisma.ImagesCreateManyArgs> = z.object({
  data: ImagesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ImagesCreateManyArgs>

export const ImagesDeleteArgsSchema: z.ZodType<Prisma.ImagesDeleteArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  where: ImagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ImagesDeleteArgs>

export const ImagesUpdateArgsSchema: z.ZodType<Prisma.ImagesUpdateArgs> = z.object({
  select: ImagesSelectSchema.optional(),
  include: ImagesIncludeSchema.optional(),
  data: z.union([ ImagesUpdateInputSchema,ImagesUncheckedUpdateInputSchema ]),
  where: ImagesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ImagesUpdateArgs>

export const ImagesUpdateManyArgsSchema: z.ZodType<Prisma.ImagesUpdateManyArgs> = z.object({
  data: z.union([ ImagesUpdateManyMutationInputSchema,ImagesUncheckedUpdateManyInputSchema ]),
  where: ImagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ImagesUpdateManyArgs>

export const ImagesDeleteManyArgsSchema: z.ZodType<Prisma.ImagesDeleteManyArgs> = z.object({
  where: ImagesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ImagesDeleteManyArgs>

export const Random1CreateArgsSchema: z.ZodType<Prisma.Random1CreateArgs> = z.object({
  select: Random1SelectSchema.optional(),
  data: z.union([ Random1CreateInputSchema,Random1UncheckedCreateInputSchema ]),
}).strict() 

export const Random1UpsertArgsSchema: z.ZodType<Prisma.Random1UpsertArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereUniqueInputSchema,
  create: z.union([ Random1CreateInputSchema,Random1UncheckedCreateInputSchema ]),
  update: z.union([ Random1UpdateInputSchema,Random1UncheckedUpdateInputSchema ]),
}).strict() 

export const Random1CreateManyArgsSchema: z.ZodType<Prisma.Random1CreateManyArgs> = z.object({
  data: Random1CreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const Random1DeleteArgsSchema: z.ZodType<Prisma.Random1DeleteArgs> = z.object({
  select: Random1SelectSchema.optional(),
  where: Random1WhereUniqueInputSchema,
}).strict() 

export const Random1UpdateArgsSchema: z.ZodType<Prisma.Random1UpdateArgs> = z.object({
  select: Random1SelectSchema.optional(),
  data: z.union([ Random1UpdateInputSchema,Random1UncheckedUpdateInputSchema ]),
  where: Random1WhereUniqueInputSchema,
}).strict() 

export const Random1UpdateManyArgsSchema: z.ZodType<Prisma.Random1UpdateManyArgs> = z.object({
  data: z.union([ Random1UpdateManyMutationInputSchema,Random1UncheckedUpdateManyInputSchema ]),
  where: Random1WhereInputSchema.optional(),
}).strict() 

export const Random1DeleteManyArgsSchema: z.ZodType<Prisma.Random1DeleteManyArgs> = z.object({
  where: Random1WhereInputSchema.optional(),
}).strict() 

export const TestdocumentCreateArgsSchema: z.ZodType<Prisma.TestdocumentCreateArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  data: z.union([ TestdocumentCreateInputSchema,TestdocumentUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.TestdocumentCreateArgs>

export const TestdocumentUpsertArgsSchema: z.ZodType<Prisma.TestdocumentUpsertArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereUniqueInputSchema,
  create: z.union([ TestdocumentCreateInputSchema,TestdocumentUncheckedCreateInputSchema ]),
  update: z.union([ TestdocumentUpdateInputSchema,TestdocumentUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.TestdocumentUpsertArgs>

export const TestdocumentCreateManyArgsSchema: z.ZodType<Prisma.TestdocumentCreateManyArgs> = z.object({
  data: TestdocumentCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TestdocumentCreateManyArgs>

export const TestdocumentDeleteArgsSchema: z.ZodType<Prisma.TestdocumentDeleteArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  where: TestdocumentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TestdocumentDeleteArgs>

export const TestdocumentUpdateArgsSchema: z.ZodType<Prisma.TestdocumentUpdateArgs> = z.object({
  select: TestdocumentSelectSchema.optional(),
  include: TestdocumentIncludeSchema.optional(),
  data: z.union([ TestdocumentUpdateInputSchema,TestdocumentUncheckedUpdateInputSchema ]),
  where: TestdocumentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TestdocumentUpdateArgs>

export const TestdocumentUpdateManyArgsSchema: z.ZodType<Prisma.TestdocumentUpdateManyArgs> = z.object({
  data: z.union([ TestdocumentUpdateManyMutationInputSchema,TestdocumentUncheckedUpdateManyInputSchema ]),
  where: TestdocumentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TestdocumentUpdateManyArgs>

export const TestdocumentDeleteManyArgsSchema: z.ZodType<Prisma.TestdocumentDeleteManyArgs> = z.object({
  where: TestdocumentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TestdocumentDeleteManyArgs>

export const TodolistCreateArgsSchema: z.ZodType<Prisma.TodolistCreateArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  data: z.union([ TodolistCreateInputSchema,TodolistUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.TodolistCreateArgs>

export const TodolistUpsertArgsSchema: z.ZodType<Prisma.TodolistUpsertArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereUniqueInputSchema,
  create: z.union([ TodolistCreateInputSchema,TodolistUncheckedCreateInputSchema ]),
  update: z.union([ TodolistUpdateInputSchema,TodolistUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.TodolistUpsertArgs>

export const TodolistCreateManyArgsSchema: z.ZodType<Prisma.TodolistCreateManyArgs> = z.object({
  data: TodolistCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TodolistCreateManyArgs>

export const TodolistDeleteArgsSchema: z.ZodType<Prisma.TodolistDeleteArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  where: TodolistWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodolistDeleteArgs>

export const TodolistUpdateArgsSchema: z.ZodType<Prisma.TodolistUpdateArgs> = z.object({
  select: TodolistSelectSchema.optional(),
  include: TodolistIncludeSchema.optional(),
  data: z.union([ TodolistUpdateInputSchema,TodolistUncheckedUpdateInputSchema ]),
  where: TodolistWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodolistUpdateArgs>

export const TodolistUpdateManyArgsSchema: z.ZodType<Prisma.TodolistUpdateManyArgs> = z.object({
  data: z.union([ TodolistUpdateManyMutationInputSchema,TodolistUncheckedUpdateManyInputSchema ]),
  where: TodolistWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TodolistUpdateManyArgs>

export const TodolistDeleteManyArgsSchema: z.ZodType<Prisma.TodolistDeleteManyArgs> = z.object({
  where: TodolistWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TodolistDeleteManyArgs>

interface ImagesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ImagesArgs
  readonly type: Omit<Prisma.ImagesGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface Random1GetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Random1Args
  readonly type: Omit<Prisma.Random1GetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface TestdocumentGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.TestdocumentArgs
  readonly type: Omit<Prisma.TestdocumentGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface TodolistGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.TodolistArgs
  readonly type: Omit<Prisma.TodolistGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  images: {
    fields: new Map([
      [
        "image_id",
        "INT4"
      ],
      [
        "link",
        "TEXT"
      ],
      [
        "descr",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("testdocument", "image_id", "doc_id", "testdocument", "ImagesToTestdocument", "one"),
    ],
    modelSchema: (ImagesCreateInputSchema as any)
      .partial()
      .or((ImagesUncheckedCreateInputSchema as any).partial()),
    createSchema: ImagesCreateArgsSchema,
    createManySchema: ImagesCreateManyArgsSchema,
    findUniqueSchema: ImagesFindUniqueArgsSchema,
    findSchema: ImagesFindFirstArgsSchema,
    updateSchema: ImagesUpdateArgsSchema,
    updateManySchema: ImagesUpdateManyArgsSchema,
    upsertSchema: ImagesUpsertArgsSchema,
    deleteSchema: ImagesDeleteArgsSchema,
    deleteManySchema: ImagesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ImagesUncheckedCreateInputSchema>,
    Prisma.ImagesCreateArgs['data'],
    Prisma.ImagesUpdateArgs['data'],
    Prisma.ImagesFindFirstArgs['select'],
    Prisma.ImagesFindFirstArgs['where'],
    Prisma.ImagesFindUniqueArgs['where'],
    Omit<Prisma.ImagesInclude, '_count'>,
    Prisma.ImagesFindFirstArgs['orderBy'],
    Prisma.ImagesScalarFieldEnum,
    ImagesGetPayload
  >,
  random1: {
    fields: new Map([
      [
        "id",
        "INT4"
      ],
      [
        "task",
        "TEXT"
      ],
      [
        "checked",
        "INT4"
      ]
    ]),
    relations: [
    ],
    modelSchema: (Random1CreateInputSchema as any)
      .partial()
      .or((Random1UncheckedCreateInputSchema as any).partial()),
    createSchema: Random1CreateArgsSchema,
    createManySchema: Random1CreateManyArgsSchema,
    findUniqueSchema: Random1FindUniqueArgsSchema,
    findSchema: Random1FindFirstArgsSchema,
    updateSchema: Random1UpdateArgsSchema,
    updateManySchema: Random1UpdateManyArgsSchema,
    upsertSchema: Random1UpsertArgsSchema,
    deleteSchema: Random1DeleteArgsSchema,
    deleteManySchema: Random1DeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Random1UncheckedCreateInputSchema>,
    Prisma.Random1CreateArgs['data'],
    Prisma.Random1UpdateArgs['data'],
    Prisma.Random1FindFirstArgs['select'],
    Prisma.Random1FindFirstArgs['where'],
    Prisma.Random1FindUniqueArgs['where'],
    never,
    Prisma.Random1FindFirstArgs['orderBy'],
    Prisma.Random1ScalarFieldEnum,
    Random1GetPayload
  >,
  testdocument: {
    fields: new Map([
      [
        "doc_id",
        "INT4"
      ],
      [
        "experiment_name",
        "TEXT"
      ],
      [
        "type",
        "TEXT"
      ],
      [
        "createdtime",
        "TEXT"
      ],
      [
        "x_position",
        "INT4"
      ],
      [
        "y_position",
        "INT4"
      ],
      [
        "width",
        "INT4"
      ],
      [
        "height",
        "INT4"
      ]
    ]),
    relations: [
      new Relation("images", "", "", "images", "ImagesToTestdocument", "one"),
      new Relation("todolist", "", "", "todolist", "TestdocumentToTodolist", "many"),
    ],
    modelSchema: (TestdocumentCreateInputSchema as any)
      .partial()
      .or((TestdocumentUncheckedCreateInputSchema as any).partial()),
    createSchema: TestdocumentCreateArgsSchema,
    createManySchema: TestdocumentCreateManyArgsSchema,
    findUniqueSchema: TestdocumentFindUniqueArgsSchema,
    findSchema: TestdocumentFindFirstArgsSchema,
    updateSchema: TestdocumentUpdateArgsSchema,
    updateManySchema: TestdocumentUpdateManyArgsSchema,
    upsertSchema: TestdocumentUpsertArgsSchema,
    deleteSchema: TestdocumentDeleteArgsSchema,
    deleteManySchema: TestdocumentDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof TestdocumentUncheckedCreateInputSchema>,
    Prisma.TestdocumentCreateArgs['data'],
    Prisma.TestdocumentUpdateArgs['data'],
    Prisma.TestdocumentFindFirstArgs['select'],
    Prisma.TestdocumentFindFirstArgs['where'],
    Prisma.TestdocumentFindUniqueArgs['where'],
    Omit<Prisma.TestdocumentInclude, '_count'>,
    Prisma.TestdocumentFindFirstArgs['orderBy'],
    Prisma.TestdocumentScalarFieldEnum,
    TestdocumentGetPayload
  >,
  todolist: {
    fields: new Map([
      [
        "doc_id",
        "INT4"
      ],
      [
        "item_id",
        "INT4"
      ],
      [
        "checked",
        "INT4"
      ],
      [
        "task",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("testdocument", "doc_id", "doc_id", "testdocument", "TestdocumentToTodolist", "one"),
    ],
    modelSchema: (TodolistCreateInputSchema as any)
      .partial()
      .or((TodolistUncheckedCreateInputSchema as any).partial()),
    createSchema: TodolistCreateArgsSchema,
    createManySchema: TodolistCreateManyArgsSchema,
    findUniqueSchema: TodolistFindUniqueArgsSchema,
    findSchema: TodolistFindFirstArgsSchema,
    updateSchema: TodolistUpdateArgsSchema,
    updateManySchema: TodolistUpdateManyArgsSchema,
    upsertSchema: TodolistUpsertArgsSchema,
    deleteSchema: TodolistDeleteArgsSchema,
    deleteManySchema: TodolistDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof TodolistUncheckedCreateInputSchema>,
    Prisma.TodolistCreateArgs['data'],
    Prisma.TodolistUpdateArgs['data'],
    Prisma.TodolistFindFirstArgs['select'],
    Prisma.TodolistFindFirstArgs['where'],
    Prisma.TodolistFindUniqueArgs['where'],
    Omit<Prisma.TodolistInclude, '_count'>,
    Prisma.TodolistFindFirstArgs['orderBy'],
    Prisma.TodolistScalarFieldEnum,
    TodolistGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
