import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  smallint: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "calendar" */
export type Calendar = {
  __typename?: 'calendar';
  day: Scalars['smallint'];
  day_id: Scalars['date'];
  day_of_week: Scalars['smallint'];
  day_of_year: Scalars['smallint'];
  month: Scalars['smallint'];
  quarter: Scalars['smallint'];
  week_of_year: Scalars['smallint'];
  /** An array relationship */
  workouts: Array<Workout>;
  /** An aggregated array relationship */
  workouts_aggregate: Workout_Aggregate;
  year: Scalars['smallint'];
};


/** columns and relationships of "calendar" */
export type CalendarWorkoutsArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** columns and relationships of "calendar" */
export type CalendarWorkouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};

/** aggregated selection of "calendar" */
export type Calendar_Aggregate = {
  __typename?: 'calendar_aggregate';
  aggregate?: Maybe<Calendar_Aggregate_Fields>;
  nodes: Array<Calendar>;
};

/** aggregate fields of "calendar" */
export type Calendar_Aggregate_Fields = {
  __typename?: 'calendar_aggregate_fields';
  avg?: Maybe<Calendar_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Calendar_Max_Fields>;
  min?: Maybe<Calendar_Min_Fields>;
  stddev?: Maybe<Calendar_Stddev_Fields>;
  stddev_pop?: Maybe<Calendar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Calendar_Stddev_Samp_Fields>;
  sum?: Maybe<Calendar_Sum_Fields>;
  var_pop?: Maybe<Calendar_Var_Pop_Fields>;
  var_samp?: Maybe<Calendar_Var_Samp_Fields>;
  variance?: Maybe<Calendar_Variance_Fields>;
};


/** aggregate fields of "calendar" */
export type Calendar_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Calendar_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "calendar" */
export type Calendar_Aggregate_Order_By = {
  avg?: Maybe<Calendar_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Calendar_Max_Order_By>;
  min?: Maybe<Calendar_Min_Order_By>;
  stddev?: Maybe<Calendar_Stddev_Order_By>;
  stddev_pop?: Maybe<Calendar_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Calendar_Stddev_Samp_Order_By>;
  sum?: Maybe<Calendar_Sum_Order_By>;
  var_pop?: Maybe<Calendar_Var_Pop_Order_By>;
  var_samp?: Maybe<Calendar_Var_Samp_Order_By>;
  variance?: Maybe<Calendar_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "calendar" */
export type Calendar_Arr_Rel_Insert_Input = {
  data: Array<Calendar_Insert_Input>;
  on_conflict?: Maybe<Calendar_On_Conflict>;
};

/** aggregate avg on columns */
export type Calendar_Avg_Fields = {
  __typename?: 'calendar_avg_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "calendar" */
export type Calendar_Avg_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "calendar". All fields are combined with a logical 'AND'. */
export type Calendar_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Calendar_Bool_Exp>>>;
  _not?: Maybe<Calendar_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Calendar_Bool_Exp>>>;
  day?: Maybe<Smallint_Comparison_Exp>;
  day_id?: Maybe<Date_Comparison_Exp>;
  day_of_week?: Maybe<Smallint_Comparison_Exp>;
  day_of_year?: Maybe<Smallint_Comparison_Exp>;
  month?: Maybe<Smallint_Comparison_Exp>;
  quarter?: Maybe<Smallint_Comparison_Exp>;
  week_of_year?: Maybe<Smallint_Comparison_Exp>;
  workouts?: Maybe<Workout_Bool_Exp>;
  year?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "calendar" */
export enum Calendar_Constraint {
  /** unique or primary key constraint */
  CalendarPkey = 'calendar_pkey'
}

/** input type for incrementing integer column in table "calendar" */
export type Calendar_Inc_Input = {
  day?: Maybe<Scalars['smallint']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  year?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "calendar" */
export type Calendar_Insert_Input = {
  day?: Maybe<Scalars['smallint']>;
  day_id?: Maybe<Scalars['date']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  workouts?: Maybe<Workout_Arr_Rel_Insert_Input>;
  year?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Calendar_Max_Fields = {
  __typename?: 'calendar_max_fields';
  day?: Maybe<Scalars['smallint']>;
  day_id?: Maybe<Scalars['date']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  year?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "calendar" */
export type Calendar_Max_Order_By = {
  day?: Maybe<Order_By>;
  day_id?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Calendar_Min_Fields = {
  __typename?: 'calendar_min_fields';
  day?: Maybe<Scalars['smallint']>;
  day_id?: Maybe<Scalars['date']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  year?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "calendar" */
export type Calendar_Min_Order_By = {
  day?: Maybe<Order_By>;
  day_id?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** response of any mutation on the table "calendar" */
export type Calendar_Mutation_Response = {
  __typename?: 'calendar_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Calendar>;
};

/** input type for inserting object relation for remote table "calendar" */
export type Calendar_Obj_Rel_Insert_Input = {
  data: Calendar_Insert_Input;
  on_conflict?: Maybe<Calendar_On_Conflict>;
};

/** on conflict condition type for table "calendar" */
export type Calendar_On_Conflict = {
  constraint: Calendar_Constraint;
  update_columns: Array<Calendar_Update_Column>;
  where?: Maybe<Calendar_Bool_Exp>;
};

/** ordering options when selecting data from "calendar" */
export type Calendar_Order_By = {
  day?: Maybe<Order_By>;
  day_id?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  workouts_aggregate?: Maybe<Workout_Aggregate_Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "calendar" */
export type Calendar_Pk_Columns_Input = {
  day_id: Scalars['date'];
};

/** select columns of table "calendar" */
export enum Calendar_Select_Column {
  /** column name */
  Day = 'day',
  /** column name */
  DayId = 'day_id',
  /** column name */
  DayOfWeek = 'day_of_week',
  /** column name */
  DayOfYear = 'day_of_year',
  /** column name */
  Month = 'month',
  /** column name */
  Quarter = 'quarter',
  /** column name */
  WeekOfYear = 'week_of_year',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "calendar" */
export type Calendar_Set_Input = {
  day?: Maybe<Scalars['smallint']>;
  day_id?: Maybe<Scalars['date']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  year?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Calendar_Stddev_Fields = {
  __typename?: 'calendar_stddev_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "calendar" */
export type Calendar_Stddev_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Calendar_Stddev_Pop_Fields = {
  __typename?: 'calendar_stddev_pop_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "calendar" */
export type Calendar_Stddev_Pop_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Calendar_Stddev_Samp_Fields = {
  __typename?: 'calendar_stddev_samp_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "calendar" */
export type Calendar_Stddev_Samp_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Calendar_Sum_Fields = {
  __typename?: 'calendar_sum_fields';
  day?: Maybe<Scalars['smallint']>;
  day_of_week?: Maybe<Scalars['smallint']>;
  day_of_year?: Maybe<Scalars['smallint']>;
  month?: Maybe<Scalars['smallint']>;
  quarter?: Maybe<Scalars['smallint']>;
  week_of_year?: Maybe<Scalars['smallint']>;
  year?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "calendar" */
export type Calendar_Sum_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** update columns of table "calendar" */
export enum Calendar_Update_Column {
  /** column name */
  Day = 'day',
  /** column name */
  DayId = 'day_id',
  /** column name */
  DayOfWeek = 'day_of_week',
  /** column name */
  DayOfYear = 'day_of_year',
  /** column name */
  Month = 'month',
  /** column name */
  Quarter = 'quarter',
  /** column name */
  WeekOfYear = 'week_of_year',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Calendar_Var_Pop_Fields = {
  __typename?: 'calendar_var_pop_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "calendar" */
export type Calendar_Var_Pop_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Calendar_Var_Samp_Fields = {
  __typename?: 'calendar_var_samp_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "calendar" */
export type Calendar_Var_Samp_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Calendar_Variance_Fields = {
  __typename?: 'calendar_variance_fields';
  day?: Maybe<Scalars['Float']>;
  day_of_week?: Maybe<Scalars['Float']>;
  day_of_year?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  week_of_year?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "calendar" */
export type Calendar_Variance_Order_By = {
  day?: Maybe<Order_By>;
  day_of_week?: Maybe<Order_By>;
  day_of_year?: Maybe<Order_By>;
  month?: Maybe<Order_By>;
  quarter?: Maybe<Order_By>;
  week_of_year?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "exercise" */
export type Exercise = {
  __typename?: 'exercise';
  created?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  excerciseDetails?: Maybe<ExerciseDetails>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  exerciseName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  sets: Array<Set>;
  /** An aggregated array relationship */
  sets_aggregate: Set_Aggregate;
  /** An object relationship */
  workout?: Maybe<Workout>;
  workout_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "exercise" */
export type ExerciseSetsArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};


/** columns and relationships of "exercise" */
export type ExerciseSets_AggregateArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};

/** columns and relationships of "exerciseDetails" */
export type ExerciseDetails = {
  __typename?: 'exerciseDetails';
  comments?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  muscles: Array<ExerciseDetails_Muscle>;
  /** An aggregated array relationship */
  muscles_aggregate: ExerciseDetails_Muscle_Aggregate;
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "exerciseDetails" */
export type ExerciseDetailsMusclesArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** columns and relationships of "exerciseDetails" */
export type ExerciseDetailsMuscles_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};

/** aggregated selection of "exerciseDetails" */
export type ExerciseDetails_Aggregate = {
  __typename?: 'exerciseDetails_aggregate';
  aggregate?: Maybe<ExerciseDetails_Aggregate_Fields>;
  nodes: Array<ExerciseDetails>;
};

/** aggregate fields of "exerciseDetails" */
export type ExerciseDetails_Aggregate_Fields = {
  __typename?: 'exerciseDetails_aggregate_fields';
  avg?: Maybe<ExerciseDetails_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ExerciseDetails_Max_Fields>;
  min?: Maybe<ExerciseDetails_Min_Fields>;
  stddev?: Maybe<ExerciseDetails_Stddev_Fields>;
  stddev_pop?: Maybe<ExerciseDetails_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ExerciseDetails_Stddev_Samp_Fields>;
  sum?: Maybe<ExerciseDetails_Sum_Fields>;
  var_pop?: Maybe<ExerciseDetails_Var_Pop_Fields>;
  var_samp?: Maybe<ExerciseDetails_Var_Samp_Fields>;
  variance?: Maybe<ExerciseDetails_Variance_Fields>;
};


/** aggregate fields of "exerciseDetails" */
export type ExerciseDetails_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExerciseDetails_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exerciseDetails" */
export type ExerciseDetails_Aggregate_Order_By = {
  avg?: Maybe<ExerciseDetails_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ExerciseDetails_Max_Order_By>;
  min?: Maybe<ExerciseDetails_Min_Order_By>;
  stddev?: Maybe<ExerciseDetails_Stddev_Order_By>;
  stddev_pop?: Maybe<ExerciseDetails_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ExerciseDetails_Stddev_Samp_Order_By>;
  sum?: Maybe<ExerciseDetails_Sum_Order_By>;
  var_pop?: Maybe<ExerciseDetails_Var_Pop_Order_By>;
  var_samp?: Maybe<ExerciseDetails_Var_Samp_Order_By>;
  variance?: Maybe<ExerciseDetails_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exerciseDetails" */
export type ExerciseDetails_Arr_Rel_Insert_Input = {
  data: Array<ExerciseDetails_Insert_Input>;
  on_conflict?: Maybe<ExerciseDetails_On_Conflict>;
};

/** aggregate avg on columns */
export type ExerciseDetails_Avg_Fields = {
  __typename?: 'exerciseDetails_avg_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exerciseDetails" */
export type ExerciseDetails_Avg_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exerciseDetails". All fields are combined with a logical 'AND'. */
export type ExerciseDetails_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ExerciseDetails_Bool_Exp>>>;
  _not?: Maybe<ExerciseDetails_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ExerciseDetails_Bool_Exp>>>;
  comments?: Maybe<String_Comparison_Exp>;
  difficulty?: Maybe<Int_Comparison_Exp>;
  equipment?: Maybe<String_Comparison_Exp>;
  exerciseName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  muscles?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exerciseDetails" */
export enum ExerciseDetails_Constraint {
  /** unique or primary key constraint */
  ExerciseInfoPkey = 'exercise_info_pkey'
}

/** input type for incrementing integer column in table "exerciseDetails" */
export type ExerciseDetails_Inc_Input = {
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "exerciseDetails" */
export type ExerciseDetails_Insert_Input = {
  comments?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  muscles?: Maybe<ExerciseDetails_Muscle_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ExerciseDetails_Max_Fields = {
  __typename?: 'exerciseDetails_max_fields';
  comments?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exerciseDetails" */
export type ExerciseDetails_Max_Order_By = {
  comments?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  equipment?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ExerciseDetails_Min_Fields = {
  __typename?: 'exerciseDetails_min_fields';
  comments?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exerciseDetails" */
export type ExerciseDetails_Min_Order_By = {
  comments?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  equipment?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** columns and relationships of "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle = {
  __typename?: 'exerciseDetails_muscle';
  /** An object relationship */
  exerciseDetails?: Maybe<ExerciseDetails>;
  exerciseDetailsId: Scalars['Int'];
  /** An object relationship */
  muscle?: Maybe<Muscle>;
  muscleId: Scalars['Int'];
  type: Scalars['String'];
};

/** aggregated selection of "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Aggregate = {
  __typename?: 'exerciseDetails_muscle_aggregate';
  aggregate?: Maybe<ExerciseDetails_Muscle_Aggregate_Fields>;
  nodes: Array<ExerciseDetails_Muscle>;
};

/** aggregate fields of "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Aggregate_Fields = {
  __typename?: 'exerciseDetails_muscle_aggregate_fields';
  avg?: Maybe<ExerciseDetails_Muscle_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ExerciseDetails_Muscle_Max_Fields>;
  min?: Maybe<ExerciseDetails_Muscle_Min_Fields>;
  stddev?: Maybe<ExerciseDetails_Muscle_Stddev_Fields>;
  stddev_pop?: Maybe<ExerciseDetails_Muscle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ExerciseDetails_Muscle_Stddev_Samp_Fields>;
  sum?: Maybe<ExerciseDetails_Muscle_Sum_Fields>;
  var_pop?: Maybe<ExerciseDetails_Muscle_Var_Pop_Fields>;
  var_samp?: Maybe<ExerciseDetails_Muscle_Var_Samp_Fields>;
  variance?: Maybe<ExerciseDetails_Muscle_Variance_Fields>;
};


/** aggregate fields of "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Aggregate_Order_By = {
  avg?: Maybe<ExerciseDetails_Muscle_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ExerciseDetails_Muscle_Max_Order_By>;
  min?: Maybe<ExerciseDetails_Muscle_Min_Order_By>;
  stddev?: Maybe<ExerciseDetails_Muscle_Stddev_Order_By>;
  stddev_pop?: Maybe<ExerciseDetails_Muscle_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ExerciseDetails_Muscle_Stddev_Samp_Order_By>;
  sum?: Maybe<ExerciseDetails_Muscle_Sum_Order_By>;
  var_pop?: Maybe<ExerciseDetails_Muscle_Var_Pop_Order_By>;
  var_samp?: Maybe<ExerciseDetails_Muscle_Var_Samp_Order_By>;
  variance?: Maybe<ExerciseDetails_Muscle_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Arr_Rel_Insert_Input = {
  data: Array<ExerciseDetails_Muscle_Insert_Input>;
  on_conflict?: Maybe<ExerciseDetails_Muscle_On_Conflict>;
};

/** aggregate avg on columns */
export type ExerciseDetails_Muscle_Avg_Fields = {
  __typename?: 'exerciseDetails_muscle_avg_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Avg_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exerciseDetails_muscle". All fields are combined with a logical 'AND'. */
export type ExerciseDetails_Muscle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ExerciseDetails_Muscle_Bool_Exp>>>;
  _not?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ExerciseDetails_Muscle_Bool_Exp>>>;
  exerciseDetails?: Maybe<ExerciseDetails_Bool_Exp>;
  exerciseDetailsId?: Maybe<Int_Comparison_Exp>;
  muscle?: Maybe<Muscle_Bool_Exp>;
  muscleId?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "exerciseDetails_muscle" */
export enum ExerciseDetails_Muscle_Constraint {
  /** unique or primary key constraint */
  ExerciseMusclePkey = 'exercise_muscle_pkey'
}

/** input type for incrementing integer column in table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Inc_Input = {
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscleId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Insert_Input = {
  exerciseDetails?: Maybe<ExerciseDetails_Obj_Rel_Insert_Input>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscle?: Maybe<Muscle_Obj_Rel_Insert_Input>;
  muscleId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ExerciseDetails_Muscle_Max_Fields = {
  __typename?: 'exerciseDetails_muscle_max_fields';
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscleId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Max_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ExerciseDetails_Muscle_Min_Fields = {
  __typename?: 'exerciseDetails_muscle_min_fields';
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscleId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Min_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Mutation_Response = {
  __typename?: 'exerciseDetails_muscle_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ExerciseDetails_Muscle>;
};

/** input type for inserting object relation for remote table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Obj_Rel_Insert_Input = {
  data: ExerciseDetails_Muscle_Insert_Input;
  on_conflict?: Maybe<ExerciseDetails_Muscle_On_Conflict>;
};

/** on conflict condition type for table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_On_Conflict = {
  constraint: ExerciseDetails_Muscle_Constraint;
  update_columns: Array<ExerciseDetails_Muscle_Update_Column>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};

/** ordering options when selecting data from "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Order_By = {
  exerciseDetails?: Maybe<ExerciseDetails_Order_By>;
  exerciseDetailsId?: Maybe<Order_By>;
  muscle?: Maybe<Muscle_Order_By>;
  muscleId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Pk_Columns_Input = {
  exerciseDetailsId: Scalars['Int'];
  muscleId: Scalars['Int'];
};

/** select columns of table "exerciseDetails_muscle" */
export enum ExerciseDetails_Muscle_Select_Column {
  /** column name */
  ExerciseDetailsId = 'exerciseDetailsId',
  /** column name */
  MuscleId = 'muscleId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Set_Input = {
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscleId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ExerciseDetails_Muscle_Stddev_Fields = {
  __typename?: 'exerciseDetails_muscle_stddev_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Stddev_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ExerciseDetails_Muscle_Stddev_Pop_Fields = {
  __typename?: 'exerciseDetails_muscle_stddev_pop_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Stddev_Pop_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ExerciseDetails_Muscle_Stddev_Samp_Fields = {
  __typename?: 'exerciseDetails_muscle_stddev_samp_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Stddev_Samp_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ExerciseDetails_Muscle_Sum_Fields = {
  __typename?: 'exerciseDetails_muscle_sum_fields';
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  muscleId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Sum_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** update columns of table "exerciseDetails_muscle" */
export enum ExerciseDetails_Muscle_Update_Column {
  /** column name */
  ExerciseDetailsId = 'exerciseDetailsId',
  /** column name */
  MuscleId = 'muscleId',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type ExerciseDetails_Muscle_Var_Pop_Fields = {
  __typename?: 'exerciseDetails_muscle_var_pop_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Var_Pop_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ExerciseDetails_Muscle_Var_Samp_Fields = {
  __typename?: 'exerciseDetails_muscle_var_samp_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Var_Samp_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ExerciseDetails_Muscle_Variance_Fields = {
  __typename?: 'exerciseDetails_muscle_variance_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  muscleId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exerciseDetails_muscle" */
export type ExerciseDetails_Muscle_Variance_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  muscleId?: Maybe<Order_By>;
};

/** response of any mutation on the table "exerciseDetails" */
export type ExerciseDetails_Mutation_Response = {
  __typename?: 'exerciseDetails_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ExerciseDetails>;
};

/** input type for inserting object relation for remote table "exerciseDetails" */
export type ExerciseDetails_Obj_Rel_Insert_Input = {
  data: ExerciseDetails_Insert_Input;
  on_conflict?: Maybe<ExerciseDetails_On_Conflict>;
};

/** on conflict condition type for table "exerciseDetails" */
export type ExerciseDetails_On_Conflict = {
  constraint: ExerciseDetails_Constraint;
  update_columns: Array<ExerciseDetails_Update_Column>;
  where?: Maybe<ExerciseDetails_Bool_Exp>;
};

/** ordering options when selecting data from "exerciseDetails" */
export type ExerciseDetails_Order_By = {
  comments?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  equipment?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  muscles_aggregate?: Maybe<ExerciseDetails_Muscle_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "exerciseDetails" */
export type ExerciseDetails_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "exerciseDetails" */
export enum ExerciseDetails_Select_Column {
  /** column name */
  Comments = 'comments',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Equipment = 'equipment',
  /** column name */
  ExerciseName = 'exerciseName',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "exerciseDetails" */
export type ExerciseDetails_Set_Input = {
  comments?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ExerciseDetails_Stddev_Fields = {
  __typename?: 'exerciseDetails_stddev_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exerciseDetails" */
export type ExerciseDetails_Stddev_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ExerciseDetails_Stddev_Pop_Fields = {
  __typename?: 'exerciseDetails_stddev_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exerciseDetails" */
export type ExerciseDetails_Stddev_Pop_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ExerciseDetails_Stddev_Samp_Fields = {
  __typename?: 'exerciseDetails_stddev_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exerciseDetails" */
export type ExerciseDetails_Stddev_Samp_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ExerciseDetails_Sum_Fields = {
  __typename?: 'exerciseDetails_sum_fields';
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exerciseDetails" */
export type ExerciseDetails_Sum_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "exerciseDetails" */
export enum ExerciseDetails_Update_Column {
  /** column name */
  Comments = 'comments',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Equipment = 'equipment',
  /** column name */
  ExerciseName = 'exerciseName',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type ExerciseDetails_Var_Pop_Fields = {
  __typename?: 'exerciseDetails_var_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exerciseDetails" */
export type ExerciseDetails_Var_Pop_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ExerciseDetails_Var_Samp_Fields = {
  __typename?: 'exerciseDetails_var_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exerciseDetails" */
export type ExerciseDetails_Var_Samp_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ExerciseDetails_Variance_Fields = {
  __typename?: 'exerciseDetails_variance_fields';
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exerciseDetails" */
export type ExerciseDetails_Variance_Order_By = {
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregated selection of "exercise" */
export type Exercise_Aggregate = {
  __typename?: 'exercise_aggregate';
  aggregate?: Maybe<Exercise_Aggregate_Fields>;
  nodes: Array<Exercise>;
};

/** aggregate fields of "exercise" */
export type Exercise_Aggregate_Fields = {
  __typename?: 'exercise_aggregate_fields';
  avg?: Maybe<Exercise_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Exercise_Max_Fields>;
  min?: Maybe<Exercise_Min_Fields>;
  stddev?: Maybe<Exercise_Stddev_Fields>;
  stddev_pop?: Maybe<Exercise_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercise_Stddev_Samp_Fields>;
  sum?: Maybe<Exercise_Sum_Fields>;
  var_pop?: Maybe<Exercise_Var_Pop_Fields>;
  var_samp?: Maybe<Exercise_Var_Samp_Fields>;
  variance?: Maybe<Exercise_Variance_Fields>;
};


/** aggregate fields of "exercise" */
export type Exercise_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Exercise_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exercise" */
export type Exercise_Aggregate_Order_By = {
  avg?: Maybe<Exercise_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Exercise_Max_Order_By>;
  min?: Maybe<Exercise_Min_Order_By>;
  stddev?: Maybe<Exercise_Stddev_Order_By>;
  stddev_pop?: Maybe<Exercise_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Exercise_Stddev_Samp_Order_By>;
  sum?: Maybe<Exercise_Sum_Order_By>;
  var_pop?: Maybe<Exercise_Var_Pop_Order_By>;
  var_samp?: Maybe<Exercise_Var_Samp_Order_By>;
  variance?: Maybe<Exercise_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exercise" */
export type Exercise_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Insert_Input>;
  on_conflict?: Maybe<Exercise_On_Conflict>;
};

/** aggregate avg on columns */
export type Exercise_Avg_Fields = {
  __typename?: 'exercise_avg_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "exercise" */
export type Exercise_Avg_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exercise". All fields are combined with a logical 'AND'. */
export type Exercise_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Exercise_Bool_Exp>>>;
  _not?: Maybe<Exercise_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Exercise_Bool_Exp>>>;
  created?: Maybe<Timestamptz_Comparison_Exp>;
  excerciseDetails?: Maybe<ExerciseDetails_Bool_Exp>;
  exerciseDetailsId?: Maybe<Int_Comparison_Exp>;
  exerciseName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sets?: Maybe<Set_Bool_Exp>;
  workout?: Maybe<Workout_Bool_Exp>;
  workout_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise" */
export enum Exercise_Constraint {
  /** unique or primary key constraint */
  TestyNameKey = 'testy_name_key',
  /** unique or primary key constraint */
  TestyPkey = 'testy_pkey'
}

/** input type for incrementing integer column in table "exercise" */
export type Exercise_Inc_Input = {
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "exercise" */
export type Exercise_Insert_Input = {
  created?: Maybe<Scalars['timestamptz']>;
  excerciseDetails?: Maybe<ExerciseDetails_Obj_Rel_Insert_Input>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sets?: Maybe<Set_Arr_Rel_Insert_Input>;
  workout?: Maybe<Workout_Obj_Rel_Insert_Input>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Exercise_Max_Fields = {
  __typename?: 'exercise_max_fields';
  created?: Maybe<Scalars['timestamptz']>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "exercise" */
export type Exercise_Max_Order_By = {
  created?: Maybe<Order_By>;
  exerciseDetailsId?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Min_Fields = {
  __typename?: 'exercise_min_fields';
  created?: Maybe<Scalars['timestamptz']>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "exercise" */
export type Exercise_Min_Order_By = {
  created?: Maybe<Order_By>;
  exerciseDetailsId?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "exercise" */
export type Exercise_Mutation_Response = {
  __typename?: 'exercise_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Exercise>;
};

/** input type for inserting object relation for remote table "exercise" */
export type Exercise_Obj_Rel_Insert_Input = {
  data: Exercise_Insert_Input;
  on_conflict?: Maybe<Exercise_On_Conflict>;
};

/** on conflict condition type for table "exercise" */
export type Exercise_On_Conflict = {
  constraint: Exercise_Constraint;
  update_columns: Array<Exercise_Update_Column>;
  where?: Maybe<Exercise_Bool_Exp>;
};

/** ordering options when selecting data from "exercise" */
export type Exercise_Order_By = {
  created?: Maybe<Order_By>;
  excerciseDetails?: Maybe<ExerciseDetails_Order_By>;
  exerciseDetailsId?: Maybe<Order_By>;
  exerciseName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sets_aggregate?: Maybe<Set_Aggregate_Order_By>;
  workout?: Maybe<Workout_Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "exercise" */
export type Exercise_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "exercise" */
export enum Exercise_Select_Column {
  /** column name */
  Created = 'created',
  /** column name */
  ExerciseDetailsId = 'exerciseDetailsId',
  /** column name */
  ExerciseName = 'exerciseName',
  /** column name */
  Id = 'id',
  /** column name */
  WorkoutId = 'workout_id'
}

/** input type for updating data in table "exercise" */
export type Exercise_Set_Input = {
  created?: Maybe<Scalars['timestamptz']>;
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  exerciseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Exercise_Stddev_Fields = {
  __typename?: 'exercise_stddev_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "exercise" */
export type Exercise_Stddev_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exercise_Stddev_Pop_Fields = {
  __typename?: 'exercise_stddev_pop_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "exercise" */
export type Exercise_Stddev_Pop_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exercise_Stddev_Samp_Fields = {
  __typename?: 'exercise_stddev_samp_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "exercise" */
export type Exercise_Stddev_Samp_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Exercise_Sum_Fields = {
  __typename?: 'exercise_sum_fields';
  exerciseDetailsId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  workout_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "exercise" */
export type Exercise_Sum_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** update columns of table "exercise" */
export enum Exercise_Update_Column {
  /** column name */
  Created = 'created',
  /** column name */
  ExerciseDetailsId = 'exerciseDetailsId',
  /** column name */
  ExerciseName = 'exerciseName',
  /** column name */
  Id = 'id',
  /** column name */
  WorkoutId = 'workout_id'
}

/** aggregate var_pop on columns */
export type Exercise_Var_Pop_Fields = {
  __typename?: 'exercise_var_pop_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "exercise" */
export type Exercise_Var_Pop_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exercise_Var_Samp_Fields = {
  __typename?: 'exercise_var_samp_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "exercise" */
export type Exercise_Var_Samp_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Exercise_Variance_Fields = {
  __typename?: 'exercise_variance_fields';
  exerciseDetailsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workout_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "exercise" */
export type Exercise_Variance_Order_By = {
  exerciseDetailsId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workout_id?: Maybe<Order_By>;
};

/** columns and relationships of "muscle" */
export type Muscle = {
  __typename?: 'muscle';
  group?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label: Scalars['String'];
  /** An array relationship */
  muscle_exerciseInfo: Array<ExerciseDetails_Muscle>;
  /** An aggregated array relationship */
  muscle_exerciseInfo_aggregate: ExerciseDetails_Muscle_Aggregate;
  name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "muscle" */
export type MuscleMuscle_ExerciseInfoArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** columns and relationships of "muscle" */
export type MuscleMuscle_ExerciseInfo_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};

/** aggregated selection of "muscle" */
export type Muscle_Aggregate = {
  __typename?: 'muscle_aggregate';
  aggregate?: Maybe<Muscle_Aggregate_Fields>;
  nodes: Array<Muscle>;
};

/** aggregate fields of "muscle" */
export type Muscle_Aggregate_Fields = {
  __typename?: 'muscle_aggregate_fields';
  avg?: Maybe<Muscle_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Muscle_Max_Fields>;
  min?: Maybe<Muscle_Min_Fields>;
  stddev?: Maybe<Muscle_Stddev_Fields>;
  stddev_pop?: Maybe<Muscle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Muscle_Stddev_Samp_Fields>;
  sum?: Maybe<Muscle_Sum_Fields>;
  var_pop?: Maybe<Muscle_Var_Pop_Fields>;
  var_samp?: Maybe<Muscle_Var_Samp_Fields>;
  variance?: Maybe<Muscle_Variance_Fields>;
};


/** aggregate fields of "muscle" */
export type Muscle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Muscle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "muscle" */
export type Muscle_Aggregate_Order_By = {
  avg?: Maybe<Muscle_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Muscle_Max_Order_By>;
  min?: Maybe<Muscle_Min_Order_By>;
  stddev?: Maybe<Muscle_Stddev_Order_By>;
  stddev_pop?: Maybe<Muscle_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Muscle_Stddev_Samp_Order_By>;
  sum?: Maybe<Muscle_Sum_Order_By>;
  var_pop?: Maybe<Muscle_Var_Pop_Order_By>;
  var_samp?: Maybe<Muscle_Var_Samp_Order_By>;
  variance?: Maybe<Muscle_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "muscle" */
export type Muscle_Arr_Rel_Insert_Input = {
  data: Array<Muscle_Insert_Input>;
  on_conflict?: Maybe<Muscle_On_Conflict>;
};

/** aggregate avg on columns */
export type Muscle_Avg_Fields = {
  __typename?: 'muscle_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "muscle" */
export type Muscle_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "muscle". All fields are combined with a logical 'AND'. */
export type Muscle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Muscle_Bool_Exp>>>;
  _not?: Maybe<Muscle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Muscle_Bool_Exp>>>;
  group?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  muscle_exerciseInfo?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "muscle" */
export enum Muscle_Constraint {
  /** unique or primary key constraint */
  MuscleNameKey = 'muscle_name_key',
  /** unique or primary key constraint */
  MuscleNameKey1 = 'muscle_name_key1',
  /** unique or primary key constraint */
  MusclePkey = 'muscle_pkey'
}

/** input type for incrementing integer column in table "muscle" */
export type Muscle_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "muscle" */
export type Muscle_Insert_Input = {
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  muscle_exerciseInfo?: Maybe<ExerciseDetails_Muscle_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Muscle_Max_Fields = {
  __typename?: 'muscle_max_fields';
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "muscle" */
export type Muscle_Max_Order_By = {
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Muscle_Min_Fields = {
  __typename?: 'muscle_min_fields';
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "muscle" */
export type Muscle_Min_Order_By = {
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "muscle" */
export type Muscle_Mutation_Response = {
  __typename?: 'muscle_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Muscle>;
};

/** input type for inserting object relation for remote table "muscle" */
export type Muscle_Obj_Rel_Insert_Input = {
  data: Muscle_Insert_Input;
  on_conflict?: Maybe<Muscle_On_Conflict>;
};

/** on conflict condition type for table "muscle" */
export type Muscle_On_Conflict = {
  constraint: Muscle_Constraint;
  update_columns: Array<Muscle_Update_Column>;
  where?: Maybe<Muscle_Bool_Exp>;
};

/** ordering options when selecting data from "muscle" */
export type Muscle_Order_By = {
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  muscle_exerciseInfo_aggregate?: Maybe<ExerciseDetails_Muscle_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "muscle" */
export type Muscle_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "muscle" */
export enum Muscle_Select_Column {
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "muscle" */
export type Muscle_Set_Input = {
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Muscle_Stddev_Fields = {
  __typename?: 'muscle_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "muscle" */
export type Muscle_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Muscle_Stddev_Pop_Fields = {
  __typename?: 'muscle_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "muscle" */
export type Muscle_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Muscle_Stddev_Samp_Fields = {
  __typename?: 'muscle_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "muscle" */
export type Muscle_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Muscle_Sum_Fields = {
  __typename?: 'muscle_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "muscle" */
export type Muscle_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "muscle" */
export enum Muscle_Update_Column {
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Muscle_Var_Pop_Fields = {
  __typename?: 'muscle_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "muscle" */
export type Muscle_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Muscle_Var_Samp_Fields = {
  __typename?: 'muscle_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "muscle" */
export type Muscle_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Muscle_Variance_Fields = {
  __typename?: 'muscle_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "muscle" */
export type Muscle_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "calendar" */
  delete_calendar?: Maybe<Calendar_Mutation_Response>;
  /** delete single row from the table: "calendar" */
  delete_calendar_by_pk?: Maybe<Calendar>;
  /** delete data from the table: "exercise" */
  delete_exercise?: Maybe<Exercise_Mutation_Response>;
  /** delete data from the table: "exerciseDetails" */
  delete_exerciseDetails?: Maybe<ExerciseDetails_Mutation_Response>;
  /** delete single row from the table: "exerciseDetails" */
  delete_exerciseDetails_by_pk?: Maybe<ExerciseDetails>;
  /** delete data from the table: "exerciseDetails_muscle" */
  delete_exerciseDetails_muscle?: Maybe<ExerciseDetails_Muscle_Mutation_Response>;
  /** delete single row from the table: "exerciseDetails_muscle" */
  delete_exerciseDetails_muscle_by_pk?: Maybe<ExerciseDetails_Muscle>;
  /** delete single row from the table: "exercise" */
  delete_exercise_by_pk?: Maybe<Exercise>;
  /** delete data from the table: "muscle" */
  delete_muscle?: Maybe<Muscle_Mutation_Response>;
  /** delete single row from the table: "muscle" */
  delete_muscle_by_pk?: Maybe<Muscle>;
  /** delete data from the table: "set" */
  delete_set?: Maybe<Set_Mutation_Response>;
  /** delete single row from the table: "set" */
  delete_set_by_pk?: Maybe<Set>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "workout" */
  delete_workout?: Maybe<Workout_Mutation_Response>;
  /** delete single row from the table: "workout" */
  delete_workout_by_pk?: Maybe<Workout>;
  /** insert data into the table: "calendar" */
  insert_calendar?: Maybe<Calendar_Mutation_Response>;
  /** insert a single row into the table: "calendar" */
  insert_calendar_one?: Maybe<Calendar>;
  /** insert data into the table: "exercise" */
  insert_exercise?: Maybe<Exercise_Mutation_Response>;
  /** insert data into the table: "exerciseDetails" */
  insert_exerciseDetails?: Maybe<ExerciseDetails_Mutation_Response>;
  /** insert data into the table: "exerciseDetails_muscle" */
  insert_exerciseDetails_muscle?: Maybe<ExerciseDetails_Muscle_Mutation_Response>;
  /** insert a single row into the table: "exerciseDetails_muscle" */
  insert_exerciseDetails_muscle_one?: Maybe<ExerciseDetails_Muscle>;
  /** insert a single row into the table: "exerciseDetails" */
  insert_exerciseDetails_one?: Maybe<ExerciseDetails>;
  /** insert a single row into the table: "exercise" */
  insert_exercise_one?: Maybe<Exercise>;
  /** insert data into the table: "muscle" */
  insert_muscle?: Maybe<Muscle_Mutation_Response>;
  /** insert a single row into the table: "muscle" */
  insert_muscle_one?: Maybe<Muscle>;
  /** insert data into the table: "set" */
  insert_set?: Maybe<Set_Mutation_Response>;
  /** insert a single row into the table: "set" */
  insert_set_one?: Maybe<Set>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "workout" */
  insert_workout?: Maybe<Workout_Mutation_Response>;
  /** insert a single row into the table: "workout" */
  insert_workout_one?: Maybe<Workout>;
  /** update data of the table: "calendar" */
  update_calendar?: Maybe<Calendar_Mutation_Response>;
  /** update single row of the table: "calendar" */
  update_calendar_by_pk?: Maybe<Calendar>;
  /** update data of the table: "exercise" */
  update_exercise?: Maybe<Exercise_Mutation_Response>;
  /** update data of the table: "exerciseDetails" */
  update_exerciseDetails?: Maybe<ExerciseDetails_Mutation_Response>;
  /** update single row of the table: "exerciseDetails" */
  update_exerciseDetails_by_pk?: Maybe<ExerciseDetails>;
  /** update data of the table: "exerciseDetails_muscle" */
  update_exerciseDetails_muscle?: Maybe<ExerciseDetails_Muscle_Mutation_Response>;
  /** update single row of the table: "exerciseDetails_muscle" */
  update_exerciseDetails_muscle_by_pk?: Maybe<ExerciseDetails_Muscle>;
  /** update single row of the table: "exercise" */
  update_exercise_by_pk?: Maybe<Exercise>;
  /** update data of the table: "muscle" */
  update_muscle?: Maybe<Muscle_Mutation_Response>;
  /** update single row of the table: "muscle" */
  update_muscle_by_pk?: Maybe<Muscle>;
  /** update data of the table: "set" */
  update_set?: Maybe<Set_Mutation_Response>;
  /** update single row of the table: "set" */
  update_set_by_pk?: Maybe<Set>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "workout" */
  update_workout?: Maybe<Workout_Mutation_Response>;
  /** update single row of the table: "workout" */
  update_workout_by_pk?: Maybe<Workout>;
};


/** mutation root */
export type Mutation_RootDelete_CalendarArgs = {
  where: Calendar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Calendar_By_PkArgs = {
  day_id: Scalars['date'];
};


/** mutation root */
export type Mutation_RootDelete_ExerciseArgs = {
  where: Exercise_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ExerciseDetailsArgs = {
  where: ExerciseDetails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ExerciseDetails_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ExerciseDetails_MuscleArgs = {
  where: ExerciseDetails_Muscle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ExerciseDetails_Muscle_By_PkArgs = {
  exerciseDetailsId: Scalars['Int'];
  muscleId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MuscleArgs = {
  where: Muscle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Muscle_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SetArgs = {
  where: Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Set_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WorkoutArgs = {
  where: Workout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CalendarArgs = {
  objects: Array<Calendar_Insert_Input>;
  on_conflict?: Maybe<Calendar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Calendar_OneArgs = {
  object: Calendar_Insert_Input;
  on_conflict?: Maybe<Calendar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseArgs = {
  objects: Array<Exercise_Insert_Input>;
  on_conflict?: Maybe<Exercise_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseDetailsArgs = {
  objects: Array<ExerciseDetails_Insert_Input>;
  on_conflict?: Maybe<ExerciseDetails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseDetails_MuscleArgs = {
  objects: Array<ExerciseDetails_Muscle_Insert_Input>;
  on_conflict?: Maybe<ExerciseDetails_Muscle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseDetails_Muscle_OneArgs = {
  object: ExerciseDetails_Muscle_Insert_Input;
  on_conflict?: Maybe<ExerciseDetails_Muscle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExerciseDetails_OneArgs = {
  object: ExerciseDetails_Insert_Input;
  on_conflict?: Maybe<ExerciseDetails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_OneArgs = {
  object: Exercise_Insert_Input;
  on_conflict?: Maybe<Exercise_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MuscleArgs = {
  objects: Array<Muscle_Insert_Input>;
  on_conflict?: Maybe<Muscle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Muscle_OneArgs = {
  object: Muscle_Insert_Input;
  on_conflict?: Maybe<Muscle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SetArgs = {
  objects: Array<Set_Insert_Input>;
  on_conflict?: Maybe<Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Set_OneArgs = {
  object: Set_Insert_Input;
  on_conflict?: Maybe<Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkoutArgs = {
  objects: Array<Workout_Insert_Input>;
  on_conflict?: Maybe<Workout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_OneArgs = {
  object: Workout_Insert_Input;
  on_conflict?: Maybe<Workout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CalendarArgs = {
  _inc?: Maybe<Calendar_Inc_Input>;
  _set?: Maybe<Calendar_Set_Input>;
  where: Calendar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Calendar_By_PkArgs = {
  _inc?: Maybe<Calendar_Inc_Input>;
  _set?: Maybe<Calendar_Set_Input>;
  pk_columns: Calendar_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseArgs = {
  _inc?: Maybe<Exercise_Inc_Input>;
  _set?: Maybe<Exercise_Set_Input>;
  where: Exercise_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseDetailsArgs = {
  _inc?: Maybe<ExerciseDetails_Inc_Input>;
  _set?: Maybe<ExerciseDetails_Set_Input>;
  where: ExerciseDetails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseDetails_By_PkArgs = {
  _inc?: Maybe<ExerciseDetails_Inc_Input>;
  _set?: Maybe<ExerciseDetails_Set_Input>;
  pk_columns: ExerciseDetails_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseDetails_MuscleArgs = {
  _inc?: Maybe<ExerciseDetails_Muscle_Inc_Input>;
  _set?: Maybe<ExerciseDetails_Muscle_Set_Input>;
  where: ExerciseDetails_Muscle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ExerciseDetails_Muscle_By_PkArgs = {
  _inc?: Maybe<ExerciseDetails_Muscle_Inc_Input>;
  _set?: Maybe<ExerciseDetails_Muscle_Set_Input>;
  pk_columns: ExerciseDetails_Muscle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_By_PkArgs = {
  _inc?: Maybe<Exercise_Inc_Input>;
  _set?: Maybe<Exercise_Set_Input>;
  pk_columns: Exercise_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MuscleArgs = {
  _inc?: Maybe<Muscle_Inc_Input>;
  _set?: Maybe<Muscle_Set_Input>;
  where: Muscle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Muscle_By_PkArgs = {
  _inc?: Maybe<Muscle_Inc_Input>;
  _set?: Maybe<Muscle_Set_Input>;
  pk_columns: Muscle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SetArgs = {
  _inc?: Maybe<Set_Inc_Input>;
  _set?: Maybe<Set_Set_Input>;
  where: Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Set_By_PkArgs = {
  _inc?: Maybe<Set_Inc_Input>;
  _set?: Maybe<Set_Set_Input>;
  pk_columns: Set_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WorkoutArgs = {
  _inc?: Maybe<Workout_Inc_Input>;
  _set?: Maybe<Workout_Set_Input>;
  where: Workout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_By_PkArgs = {
  _inc?: Maybe<Workout_Inc_Input>;
  _set?: Maybe<Workout_Set_Input>;
  pk_columns: Workout_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "calendar" */
  calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "calendar" */
  calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "calendar" using primary key columns */
  calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table: "exercise" */
  exercise: Array<Exercise>;
  /** fetch data from the table: "exerciseDetails" */
  exerciseDetails: Array<ExerciseDetails>;
  /** fetch aggregated fields from the table: "exerciseDetails" */
  exerciseDetails_aggregate: ExerciseDetails_Aggregate;
  /** fetch data from the table: "exerciseDetails" using primary key columns */
  exerciseDetails_by_pk?: Maybe<ExerciseDetails>;
  /** fetch data from the table: "exerciseDetails_muscle" */
  exerciseDetails_muscle: Array<ExerciseDetails_Muscle>;
  /** fetch aggregated fields from the table: "exerciseDetails_muscle" */
  exerciseDetails_muscle_aggregate: ExerciseDetails_Muscle_Aggregate;
  /** fetch data from the table: "exerciseDetails_muscle" using primary key columns */
  exerciseDetails_muscle_by_pk?: Maybe<ExerciseDetails_Muscle>;
  /** fetch aggregated fields from the table: "exercise" */
  exercise_aggregate: Exercise_Aggregate;
  /** fetch data from the table: "exercise" using primary key columns */
  exercise_by_pk?: Maybe<Exercise>;
  /** fetch data from the table: "muscle" */
  muscle: Array<Muscle>;
  /** fetch aggregated fields from the table: "muscle" */
  muscle_aggregate: Muscle_Aggregate;
  /** fetch data from the table: "muscle" using primary key columns */
  muscle_by_pk?: Maybe<Muscle>;
  /** fetch data from the table: "set" */
  set: Array<Set>;
  /** fetch aggregated fields from the table: "set" */
  set_aggregate: Set_Aggregate;
  /** fetch data from the table: "set" using primary key columns */
  set_by_pk?: Maybe<Set>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "workout" */
  workout: Array<Workout>;
  /** fetch aggregated fields from the table: "workout" */
  workout_aggregate: Workout_Aggregate;
  /** fetch data from the table: "workout" using primary key columns */
  workout_by_pk?: Maybe<Workout>;
};


/** query root */
export type Query_RootCalendarArgs = {
  distinct_on?: Maybe<Array<Calendar_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calendar_Order_By>>;
  where?: Maybe<Calendar_Bool_Exp>;
};


/** query root */
export type Query_RootCalendar_AggregateArgs = {
  distinct_on?: Maybe<Array<Calendar_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calendar_Order_By>>;
  where?: Maybe<Calendar_Bool_Exp>;
};


/** query root */
export type Query_RootCalendar_By_PkArgs = {
  day_id: Scalars['date'];
};


/** query root */
export type Query_RootExerciseArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};


/** query root */
export type Query_RootExerciseDetailsArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Order_By>>;
  where?: Maybe<ExerciseDetails_Bool_Exp>;
};


/** query root */
export type Query_RootExerciseDetails_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Order_By>>;
  where?: Maybe<ExerciseDetails_Bool_Exp>;
};


/** query root */
export type Query_RootExerciseDetails_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootExerciseDetails_MuscleArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** query root */
export type Query_RootExerciseDetails_Muscle_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** query root */
export type Query_RootExerciseDetails_Muscle_By_PkArgs = {
  exerciseDetailsId: Scalars['Int'];
  muscleId: Scalars['Int'];
};


/** query root */
export type Query_RootExercise_AggregateArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};


/** query root */
export type Query_RootExercise_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMuscleArgs = {
  distinct_on?: Maybe<Array<Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Muscle_Order_By>>;
  where?: Maybe<Muscle_Bool_Exp>;
};


/** query root */
export type Query_RootMuscle_AggregateArgs = {
  distinct_on?: Maybe<Array<Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Muscle_Order_By>>;
  where?: Maybe<Muscle_Bool_Exp>;
};


/** query root */
export type Query_RootMuscle_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSetArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};


/** query root */
export type Query_RootSet_AggregateArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};


/** query root */
export type Query_RootSet_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWorkoutArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** query root */
export type Query_RootWorkout_AggregateArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** query root */
export type Query_RootWorkout_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "set" */
export type Set = {
  __typename?: 'set';
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exerciseId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  setName?: Maybe<Scalars['String']>;
  /** A computed field, executes function "set_total_mass" */
  totalMass?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "set" */
export type Set_Aggregate = {
  __typename?: 'set_aggregate';
  aggregate?: Maybe<Set_Aggregate_Fields>;
  nodes: Array<Set>;
};

/** aggregate fields of "set" */
export type Set_Aggregate_Fields = {
  __typename?: 'set_aggregate_fields';
  avg?: Maybe<Set_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Set_Max_Fields>;
  min?: Maybe<Set_Min_Fields>;
  stddev?: Maybe<Set_Stddev_Fields>;
  stddev_pop?: Maybe<Set_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Set_Stddev_Samp_Fields>;
  sum?: Maybe<Set_Sum_Fields>;
  var_pop?: Maybe<Set_Var_Pop_Fields>;
  var_samp?: Maybe<Set_Var_Samp_Fields>;
  variance?: Maybe<Set_Variance_Fields>;
};


/** aggregate fields of "set" */
export type Set_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Set_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "set" */
export type Set_Aggregate_Order_By = {
  avg?: Maybe<Set_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Set_Max_Order_By>;
  min?: Maybe<Set_Min_Order_By>;
  stddev?: Maybe<Set_Stddev_Order_By>;
  stddev_pop?: Maybe<Set_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Set_Stddev_Samp_Order_By>;
  sum?: Maybe<Set_Sum_Order_By>;
  var_pop?: Maybe<Set_Var_Pop_Order_By>;
  var_samp?: Maybe<Set_Var_Samp_Order_By>;
  variance?: Maybe<Set_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "set" */
export type Set_Arr_Rel_Insert_Input = {
  data: Array<Set_Insert_Input>;
  on_conflict?: Maybe<Set_On_Conflict>;
};

/** aggregate avg on columns */
export type Set_Avg_Fields = {
  __typename?: 'set_avg_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "set" */
export type Set_Avg_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "set". All fields are combined with a logical 'AND'. */
export type Set_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Set_Bool_Exp>>>;
  _not?: Maybe<Set_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Set_Bool_Exp>>>;
  completed?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  exerciseId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mass?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  reps?: Maybe<Int_Comparison_Exp>;
  setName?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "set" */
export enum Set_Constraint {
  /** unique or primary key constraint */
  SetOrderKey = 'set_order_key',
  /** unique or primary key constraint */
  Testy2Pkey = 'testy2_pkey'
}

/** input type for incrementing integer column in table "set" */
export type Set_Inc_Input = {
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "set" */
export type Set_Insert_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  setName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Set_Max_Fields = {
  __typename?: 'set_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  setName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "set" */
export type Set_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
  setName?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Set_Min_Fields = {
  __typename?: 'set_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  setName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "set" */
export type Set_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
  setName?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "set" */
export type Set_Mutation_Response = {
  __typename?: 'set_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Set>;
};

/** input type for inserting object relation for remote table "set" */
export type Set_Obj_Rel_Insert_Input = {
  data: Set_Insert_Input;
  on_conflict?: Maybe<Set_On_Conflict>;
};

/** on conflict condition type for table "set" */
export type Set_On_Conflict = {
  constraint: Set_Constraint;
  update_columns: Array<Set_Update_Column>;
  where?: Maybe<Set_Bool_Exp>;
};

/** ordering options when selecting data from "set" */
export type Set_Order_By = {
  completed?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
  setName?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "set" */
export type Set_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "set" */
export enum Set_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExerciseId = 'exerciseId',
  /** column name */
  Id = 'id',
  /** column name */
  Mass = 'mass',
  /** column name */
  Order = 'order',
  /** column name */
  Reps = 'reps',
  /** column name */
  SetName = 'setName',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "set" */
export type Set_Set_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  setName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Set_Stddev_Fields = {
  __typename?: 'set_stddev_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "set" */
export type Set_Stddev_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Set_Stddev_Pop_Fields = {
  __typename?: 'set_stddev_pop_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "set" */
export type Set_Stddev_Pop_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Set_Stddev_Samp_Fields = {
  __typename?: 'set_stddev_samp_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "set" */
export type Set_Stddev_Samp_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Set_Sum_Fields = {
  __typename?: 'set_sum_fields';
  exerciseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "set" */
export type Set_Sum_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** update columns of table "set" */
export enum Set_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExerciseId = 'exerciseId',
  /** column name */
  Id = 'id',
  /** column name */
  Mass = 'mass',
  /** column name */
  Order = 'order',
  /** column name */
  Reps = 'reps',
  /** column name */
  SetName = 'setName',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Set_Var_Pop_Fields = {
  __typename?: 'set_var_pop_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "set" */
export type Set_Var_Pop_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Set_Var_Samp_Fields = {
  __typename?: 'set_var_samp_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "set" */
export type Set_Var_Samp_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Set_Variance_Fields = {
  __typename?: 'set_variance_fields';
  exerciseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "set" */
export type Set_Variance_Order_By = {
  exerciseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mass?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  reps?: Maybe<Order_By>;
};


/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "calendar" */
  calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "calendar" */
  calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "calendar" using primary key columns */
  calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table: "exercise" */
  exercise: Array<Exercise>;
  /** fetch data from the table: "exerciseDetails" */
  exerciseDetails: Array<ExerciseDetails>;
  /** fetch aggregated fields from the table: "exerciseDetails" */
  exerciseDetails_aggregate: ExerciseDetails_Aggregate;
  /** fetch data from the table: "exerciseDetails" using primary key columns */
  exerciseDetails_by_pk?: Maybe<ExerciseDetails>;
  /** fetch data from the table: "exerciseDetails_muscle" */
  exerciseDetails_muscle: Array<ExerciseDetails_Muscle>;
  /** fetch aggregated fields from the table: "exerciseDetails_muscle" */
  exerciseDetails_muscle_aggregate: ExerciseDetails_Muscle_Aggregate;
  /** fetch data from the table: "exerciseDetails_muscle" using primary key columns */
  exerciseDetails_muscle_by_pk?: Maybe<ExerciseDetails_Muscle>;
  /** fetch aggregated fields from the table: "exercise" */
  exercise_aggregate: Exercise_Aggregate;
  /** fetch data from the table: "exercise" using primary key columns */
  exercise_by_pk?: Maybe<Exercise>;
  /** fetch data from the table: "muscle" */
  muscle: Array<Muscle>;
  /** fetch aggregated fields from the table: "muscle" */
  muscle_aggregate: Muscle_Aggregate;
  /** fetch data from the table: "muscle" using primary key columns */
  muscle_by_pk?: Maybe<Muscle>;
  /** fetch data from the table: "set" */
  set: Array<Set>;
  /** fetch aggregated fields from the table: "set" */
  set_aggregate: Set_Aggregate;
  /** fetch data from the table: "set" using primary key columns */
  set_by_pk?: Maybe<Set>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "workout" */
  workout: Array<Workout>;
  /** fetch aggregated fields from the table: "workout" */
  workout_aggregate: Workout_Aggregate;
  /** fetch data from the table: "workout" using primary key columns */
  workout_by_pk?: Maybe<Workout>;
};


/** subscription root */
export type Subscription_RootCalendarArgs = {
  distinct_on?: Maybe<Array<Calendar_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calendar_Order_By>>;
  where?: Maybe<Calendar_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCalendar_AggregateArgs = {
  distinct_on?: Maybe<Array<Calendar_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calendar_Order_By>>;
  where?: Maybe<Calendar_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCalendar_By_PkArgs = {
  day_id: Scalars['date'];
};


/** subscription root */
export type Subscription_RootExerciseArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExerciseDetailsArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Order_By>>;
  where?: Maybe<ExerciseDetails_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExerciseDetails_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Order_By>>;
  where?: Maybe<ExerciseDetails_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExerciseDetails_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootExerciseDetails_MuscleArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExerciseDetails_Muscle_AggregateArgs = {
  distinct_on?: Maybe<Array<ExerciseDetails_Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExerciseDetails_Muscle_Order_By>>;
  where?: Maybe<ExerciseDetails_Muscle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExerciseDetails_Muscle_By_PkArgs = {
  exerciseDetailsId: Scalars['Int'];
  muscleId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootExercise_AggregateArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExercise_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMuscleArgs = {
  distinct_on?: Maybe<Array<Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Muscle_Order_By>>;
  where?: Maybe<Muscle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMuscle_AggregateArgs = {
  distinct_on?: Maybe<Array<Muscle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Muscle_Order_By>>;
  where?: Maybe<Muscle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMuscle_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSetArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSet_AggregateArgs = {
  distinct_on?: Maybe<Array<Set_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Set_Order_By>>;
  where?: Maybe<Set_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSet_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorkoutArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorkout_AggregateArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorkout_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  auth_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  workouts: Array<Workout>;
  /** An aggregated array relationship */
  workouts_aggregate: Workout_Aggregate;
};


/** columns and relationships of "user" */
export type UserWorkoutsArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserWorkouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Workout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Workout_Order_By>>;
  where?: Maybe<Workout_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  auth_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  workouts?: Maybe<Workout_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  auth_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workouts?: Maybe<Workout_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  auth_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  auth_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  auth_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  auth_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  auth_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  workouts_aggregate?: Maybe<Workout_Aggregate_Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  auth_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "workout" */
export type Workout = {
  __typename?: 'workout';
  calendarId?: Maybe<Scalars['date']>;
  comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  date?: Maybe<Calendar>;
  /** An array relationship */
  exercise: Array<Exercise>;
  /** An aggregated array relationship */
  exercise_aggregate: Exercise_Aggregate;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "workout" */
export type WorkoutExerciseArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};


/** columns and relationships of "workout" */
export type WorkoutExercise_AggregateArgs = {
  distinct_on?: Maybe<Array<Exercise_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Exercise_Order_By>>;
  where?: Maybe<Exercise_Bool_Exp>;
};

/** aggregated selection of "workout" */
export type Workout_Aggregate = {
  __typename?: 'workout_aggregate';
  aggregate?: Maybe<Workout_Aggregate_Fields>;
  nodes: Array<Workout>;
};

/** aggregate fields of "workout" */
export type Workout_Aggregate_Fields = {
  __typename?: 'workout_aggregate_fields';
  avg?: Maybe<Workout_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Workout_Max_Fields>;
  min?: Maybe<Workout_Min_Fields>;
  stddev?: Maybe<Workout_Stddev_Fields>;
  stddev_pop?: Maybe<Workout_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workout_Stddev_Samp_Fields>;
  sum?: Maybe<Workout_Sum_Fields>;
  var_pop?: Maybe<Workout_Var_Pop_Fields>;
  var_samp?: Maybe<Workout_Var_Samp_Fields>;
  variance?: Maybe<Workout_Variance_Fields>;
};


/** aggregate fields of "workout" */
export type Workout_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Workout_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workout" */
export type Workout_Aggregate_Order_By = {
  avg?: Maybe<Workout_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Workout_Max_Order_By>;
  min?: Maybe<Workout_Min_Order_By>;
  stddev?: Maybe<Workout_Stddev_Order_By>;
  stddev_pop?: Maybe<Workout_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Workout_Stddev_Samp_Order_By>;
  sum?: Maybe<Workout_Sum_Order_By>;
  var_pop?: Maybe<Workout_Var_Pop_Order_By>;
  var_samp?: Maybe<Workout_Var_Samp_Order_By>;
  variance?: Maybe<Workout_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workout" */
export type Workout_Arr_Rel_Insert_Input = {
  data: Array<Workout_Insert_Input>;
  on_conflict?: Maybe<Workout_On_Conflict>;
};

/** aggregate avg on columns */
export type Workout_Avg_Fields = {
  __typename?: 'workout_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "workout" */
export type Workout_Avg_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workout". All fields are combined with a logical 'AND'. */
export type Workout_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Workout_Bool_Exp>>>;
  _not?: Maybe<Workout_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Workout_Bool_Exp>>>;
  calendarId?: Maybe<Date_Comparison_Exp>;
  comments?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  date?: Maybe<Calendar_Bool_Exp>;
  exercise?: Maybe<Exercise_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "workout" */
export enum Workout_Constraint {
  /** unique or primary key constraint */
  WorkoutPkey = 'workout_pkey'
}

/** input type for incrementing integer column in table "workout" */
export type Workout_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "workout" */
export type Workout_Insert_Input = {
  calendarId?: Maybe<Scalars['date']>;
  comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Calendar_Obj_Rel_Insert_Input>;
  exercise?: Maybe<Exercise_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Workout_Max_Fields = {
  __typename?: 'workout_max_fields';
  calendarId?: Maybe<Scalars['date']>;
  comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "workout" */
export type Workout_Max_Order_By = {
  calendarId?: Maybe<Order_By>;
  comments?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Min_Fields = {
  __typename?: 'workout_min_fields';
  calendarId?: Maybe<Scalars['date']>;
  comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "workout" */
export type Workout_Min_Order_By = {
  calendarId?: Maybe<Order_By>;
  comments?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "workout" */
export type Workout_Mutation_Response = {
  __typename?: 'workout_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Workout>;
};

/** input type for inserting object relation for remote table "workout" */
export type Workout_Obj_Rel_Insert_Input = {
  data: Workout_Insert_Input;
  on_conflict?: Maybe<Workout_On_Conflict>;
};

/** on conflict condition type for table "workout" */
export type Workout_On_Conflict = {
  constraint: Workout_Constraint;
  update_columns: Array<Workout_Update_Column>;
  where?: Maybe<Workout_Bool_Exp>;
};

/** ordering options when selecting data from "workout" */
export type Workout_Order_By = {
  calendarId?: Maybe<Order_By>;
  comments?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  date?: Maybe<Calendar_Order_By>;
  exercise_aggregate?: Maybe<Exercise_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "workout" */
export type Workout_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "workout" */
export enum Workout_Select_Column {
  /** column name */
  CalendarId = 'calendarId',
  /** column name */
  Comments = 'comments',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "workout" */
export type Workout_Set_Input = {
  calendarId?: Maybe<Scalars['date']>;
  comments?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Workout_Stddev_Fields = {
  __typename?: 'workout_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "workout" */
export type Workout_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workout_Stddev_Pop_Fields = {
  __typename?: 'workout_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "workout" */
export type Workout_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workout_Stddev_Samp_Fields = {
  __typename?: 'workout_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "workout" */
export type Workout_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Workout_Sum_Fields = {
  __typename?: 'workout_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "workout" */
export type Workout_Sum_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "workout" */
export enum Workout_Update_Column {
  /** column name */
  CalendarId = 'calendarId',
  /** column name */
  Comments = 'comments',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Workout_Var_Pop_Fields = {
  __typename?: 'workout_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "workout" */
export type Workout_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workout_Var_Samp_Fields = {
  __typename?: 'workout_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "workout" */
export type Workout_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Workout_Variance_Fields = {
  __typename?: 'workout_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "workout" */
export type Workout_Variance_Order_By = {
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type CreateExerciseDetailMutationVariables = Exact<{
  exerciseName?: Maybe<Scalars['String']>;
  equipment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  muscles?: Maybe<ExerciseDetails_Muscle_Arr_Rel_Insert_Input>;
}>;


export type CreateExerciseDetailMutation = (
  { __typename?: 'mutation_root' }
  & { insert_exerciseDetails_one?: Maybe<(
    { __typename?: 'exerciseDetails' }
    & Pick<ExerciseDetails, 'id' | 'exerciseName'>
  )> }
);

export type UpdateExerciseDetailsMutationVariables = Exact<{
  id: Scalars['Int'];
  difficulty?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['String']>;
  exerciseName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  muscles: Array<ExerciseDetails_Muscle_Insert_Input> | ExerciseDetails_Muscle_Insert_Input;
}>;


export type UpdateExerciseDetailsMutation = (
  { __typename?: 'mutation_root' }
  & { update_exerciseDetails_by_pk?: Maybe<(
    { __typename?: 'exerciseDetails' }
    & Pick<ExerciseDetails, 'id'>
  )>, delete_exerciseDetails_muscle?: Maybe<(
    { __typename?: 'exerciseDetails_muscle_mutation_response' }
    & Pick<ExerciseDetails_Muscle_Mutation_Response, 'affected_rows'>
  )>, insert_exerciseDetails_muscle?: Maybe<(
    { __typename?: 'exerciseDetails_muscle_mutation_response' }
    & { returning: Array<(
      { __typename?: 'exerciseDetails_muscle' }
      & Pick<ExerciseDetails_Muscle, 'exerciseDetailsId'>
    )> }
  )> }
);

export type GetMusclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMusclesQuery = (
  { __typename?: 'query_root' }
  & { muscle: Array<(
    { __typename?: 'muscle' }
    & Pick<Muscle, 'name' | 'label' | 'id'>
  )> }
);

export type CreateWorkoutMutationVariables = Exact<{
  exercises: Array<Workout_Insert_Input> | Workout_Insert_Input;
}>;


export type CreateWorkoutMutation = (
  { __typename?: 'mutation_root' }
  & { insert_workout?: Maybe<(
    { __typename?: 'workout_mutation_response' }
    & { returning: Array<(
      { __typename?: 'workout' }
      & Pick<Workout, 'id'>
    )> }
  )> }
);

export type ExerciseDetailsSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ExerciseDetailsSubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { exerciseDetails: Array<(
    { __typename?: 'exerciseDetails' }
    & Pick<ExerciseDetails, 'equipment' | 'exerciseName' | 'difficulty' | 'id' | 'type' | 'comments'>
    & { muscles: Array<(
      { __typename?: 'exerciseDetails_muscle' }
      & Pick<ExerciseDetails_Muscle, 'type'>
      & { muscle?: Maybe<(
        { __typename?: 'muscle' }
        & Pick<Muscle, 'name' | 'id' | 'label'>
      )> }
    )> }
  )> }
);

export type MyMutationMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type MyMutationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_exerciseDetails?: Maybe<(
    { __typename?: 'exerciseDetails_mutation_response' }
    & { returning: Array<(
      { __typename?: 'exerciseDetails' }
      & Pick<ExerciseDetails, 'id'>
    )> }
  )> }
);

export type ExerciseDetailsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  muscle?: Maybe<Scalars['String']>;
}>;


export type ExerciseDetailsQuery = (
  { __typename?: 'query_root' }
  & { exerciseDetails: Array<(
    { __typename?: 'exerciseDetails' }
    & Pick<ExerciseDetails, 'difficulty' | 'equipment' | 'exerciseName' | 'id'>
    & { muscles: Array<(
      { __typename?: 'exerciseDetails_muscle' }
      & Pick<ExerciseDetails_Muscle, 'type'>
      & { muscle?: Maybe<(
        { __typename?: 'muscle' }
        & Pick<Muscle, 'name' | 'label' | 'group'>
      )> }
    )> }
  )> }
);


export const CreateExerciseDetailDocument = gql`
    mutation CreateExerciseDetail($exerciseName: String, $equipment: String, $type: String, $difficulty: Int, $comments: String, $muscles: exerciseDetails_muscle_arr_rel_insert_input) {
  insert_exerciseDetails_one(
    object: {exerciseName: $exerciseName, equipment: $equipment, type: $type, difficulty: $difficulty, muscles: $muscles, comments: $comments}
  ) {
    id
    exerciseName
  }
}
    `;
export type CreateExerciseDetailMutationFn = Apollo.MutationFunction<CreateExerciseDetailMutation, CreateExerciseDetailMutationVariables>;

/**
 * __useCreateExerciseDetailMutation__
 *
 * To run a mutation, you first call `useCreateExerciseDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExerciseDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExerciseDetailMutation, { data, loading, error }] = useCreateExerciseDetailMutation({
 *   variables: {
 *      exerciseName: // value for 'exerciseName'
 *      equipment: // value for 'equipment'
 *      type: // value for 'type'
 *      difficulty: // value for 'difficulty'
 *      comments: // value for 'comments'
 *      muscles: // value for 'muscles'
 *   },
 * });
 */
export function useCreateExerciseDetailMutation(baseOptions?: Apollo.MutationHookOptions<CreateExerciseDetailMutation, CreateExerciseDetailMutationVariables>) {
        return Apollo.useMutation<CreateExerciseDetailMutation, CreateExerciseDetailMutationVariables>(CreateExerciseDetailDocument, baseOptions);
      }
export type CreateExerciseDetailMutationHookResult = ReturnType<typeof useCreateExerciseDetailMutation>;
export type CreateExerciseDetailMutationResult = Apollo.MutationResult<CreateExerciseDetailMutation>;
export type CreateExerciseDetailMutationOptions = Apollo.BaseMutationOptions<CreateExerciseDetailMutation, CreateExerciseDetailMutationVariables>;
export const UpdateExerciseDetailsDocument = gql`
    mutation updateExerciseDetails($id: Int!, $difficulty: Int, $equipment: String, $exerciseName: String, $type: String, $comments: String, $muscles: [exerciseDetails_muscle_insert_input!]!) {
  update_exerciseDetails_by_pk(
    pk_columns: {id: $id}
    _set: {difficulty: $difficulty, equipment: $equipment, exerciseName: $exerciseName, type: $type, comments: $comments}
  ) {
    id
  }
  delete_exerciseDetails_muscle(where: {exerciseDetailsId: {_eq: $id}}) {
    affected_rows
  }
  insert_exerciseDetails_muscle(objects: $muscles) {
    returning {
      exerciseDetailsId
    }
  }
}
    `;
export type UpdateExerciseDetailsMutationFn = Apollo.MutationFunction<UpdateExerciseDetailsMutation, UpdateExerciseDetailsMutationVariables>;

/**
 * __useUpdateExerciseDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateExerciseDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExerciseDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExerciseDetailsMutation, { data, loading, error }] = useUpdateExerciseDetailsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      difficulty: // value for 'difficulty'
 *      equipment: // value for 'equipment'
 *      exerciseName: // value for 'exerciseName'
 *      type: // value for 'type'
 *      comments: // value for 'comments'
 *      muscles: // value for 'muscles'
 *   },
 * });
 */
export function useUpdateExerciseDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExerciseDetailsMutation, UpdateExerciseDetailsMutationVariables>) {
        return Apollo.useMutation<UpdateExerciseDetailsMutation, UpdateExerciseDetailsMutationVariables>(UpdateExerciseDetailsDocument, baseOptions);
      }
export type UpdateExerciseDetailsMutationHookResult = ReturnType<typeof useUpdateExerciseDetailsMutation>;
export type UpdateExerciseDetailsMutationResult = Apollo.MutationResult<UpdateExerciseDetailsMutation>;
export type UpdateExerciseDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateExerciseDetailsMutation, UpdateExerciseDetailsMutationVariables>;
export const GetMusclesDocument = gql`
    query GetMuscles {
  muscle {
    name
    label
    id
  }
}
    `;

/**
 * __useGetMusclesQuery__
 *
 * To run a query within a React component, call `useGetMusclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMusclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMusclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMusclesQuery(baseOptions?: Apollo.QueryHookOptions<GetMusclesQuery, GetMusclesQueryVariables>) {
        return Apollo.useQuery<GetMusclesQuery, GetMusclesQueryVariables>(GetMusclesDocument, baseOptions);
      }
export function useGetMusclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMusclesQuery, GetMusclesQueryVariables>) {
          return Apollo.useLazyQuery<GetMusclesQuery, GetMusclesQueryVariables>(GetMusclesDocument, baseOptions);
        }
export type GetMusclesQueryHookResult = ReturnType<typeof useGetMusclesQuery>;
export type GetMusclesLazyQueryHookResult = ReturnType<typeof useGetMusclesLazyQuery>;
export type GetMusclesQueryResult = Apollo.QueryResult<GetMusclesQuery, GetMusclesQueryVariables>;
export const CreateWorkoutDocument = gql`
    mutation CreateWorkout($exercises: [workout_insert_input!]!) {
  insert_workout(objects: $exercises) {
    returning {
      id
    }
  }
}
    `;
export type CreateWorkoutMutationFn = Apollo.MutationFunction<CreateWorkoutMutation, CreateWorkoutMutationVariables>;

/**
 * __useCreateWorkoutMutation__
 *
 * To run a mutation, you first call `useCreateWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkoutMutation, { data, loading, error }] = useCreateWorkoutMutation({
 *   variables: {
 *      exercises: // value for 'exercises'
 *   },
 * });
 */
export function useCreateWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>) {
        return Apollo.useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(CreateWorkoutDocument, baseOptions);
      }
export type CreateWorkoutMutationHookResult = ReturnType<typeof useCreateWorkoutMutation>;
export type CreateWorkoutMutationResult = Apollo.MutationResult<CreateWorkoutMutation>;
export type CreateWorkoutMutationOptions = Apollo.BaseMutationOptions<CreateWorkoutMutation, CreateWorkoutMutationVariables>;
export const ExerciseDetailsSubscriptionDocument = gql`
    subscription ExerciseDetailsSubscription {
  exerciseDetails(order_by: {exerciseName: asc}) {
    equipment
    exerciseName
    difficulty
    id
    type
    comments
    muscles {
      type
      muscle {
        name
        id
        label
      }
    }
  }
}
    `;

/**
 * __useExerciseDetailsSubscriptionSubscription__
 *
 * To run a query within a React component, call `useExerciseDetailsSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useExerciseDetailsSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExerciseDetailsSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useExerciseDetailsSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ExerciseDetailsSubscriptionSubscription, ExerciseDetailsSubscriptionSubscriptionVariables>) {
        return Apollo.useSubscription<ExerciseDetailsSubscriptionSubscription, ExerciseDetailsSubscriptionSubscriptionVariables>(ExerciseDetailsSubscriptionDocument, baseOptions);
      }
export type ExerciseDetailsSubscriptionSubscriptionHookResult = ReturnType<typeof useExerciseDetailsSubscriptionSubscription>;
export type ExerciseDetailsSubscriptionSubscriptionResult = Apollo.SubscriptionResult<ExerciseDetailsSubscriptionSubscription>;
export const MyMutationDocument = gql`
    mutation MyMutation($id: Int) {
  delete_exerciseDetails(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type MyMutationMutationFn = Apollo.MutationFunction<MyMutationMutation, MyMutationMutationVariables>;

/**
 * __useMyMutationMutation__
 *
 * To run a mutation, you first call `useMyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myMutationMutation, { data, loading, error }] = useMyMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMyMutationMutation(baseOptions?: Apollo.MutationHookOptions<MyMutationMutation, MyMutationMutationVariables>) {
        return Apollo.useMutation<MyMutationMutation, MyMutationMutationVariables>(MyMutationDocument, baseOptions);
      }
export type MyMutationMutationHookResult = ReturnType<typeof useMyMutationMutation>;
export type MyMutationMutationResult = Apollo.MutationResult<MyMutationMutation>;
export type MyMutationMutationOptions = Apollo.BaseMutationOptions<MyMutationMutation, MyMutationMutationVariables>;
export const ExerciseDetailsDocument = gql`
    query ExerciseDetails($search: String, $muscle: String) {
  exerciseDetails(
    where: {exerciseName: {_ilike: $search}, muscles: {muscle: {label: {_ilike: $muscle}}}}
  ) {
    difficulty
    equipment
    exerciseName
    id
    muscles {
      type
      muscle {
        name
        label
        group
      }
    }
  }
}
    `;

/**
 * __useExerciseDetailsQuery__
 *
 * To run a query within a React component, call `useExerciseDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExerciseDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExerciseDetailsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      muscle: // value for 'muscle'
 *   },
 * });
 */
export function useExerciseDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ExerciseDetailsQuery, ExerciseDetailsQueryVariables>) {
        return Apollo.useQuery<ExerciseDetailsQuery, ExerciseDetailsQueryVariables>(ExerciseDetailsDocument, baseOptions);
      }
export function useExerciseDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExerciseDetailsQuery, ExerciseDetailsQueryVariables>) {
          return Apollo.useLazyQuery<ExerciseDetailsQuery, ExerciseDetailsQueryVariables>(ExerciseDetailsDocument, baseOptions);
        }
export type ExerciseDetailsQueryHookResult = ReturnType<typeof useExerciseDetailsQuery>;
export type ExerciseDetailsLazyQueryHookResult = ReturnType<typeof useExerciseDetailsLazyQuery>;
export type ExerciseDetailsQueryResult = Apollo.QueryResult<ExerciseDetailsQuery, ExerciseDetailsQueryVariables>;