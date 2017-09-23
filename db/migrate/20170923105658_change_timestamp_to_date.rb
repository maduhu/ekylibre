class ChangeTimestampToDate < ActiveRecord::Migration
  def change
    change_column :entities, :born_at, :date
    change_column :entities, :dead_at, :date
    change_column :loans, :ongoing_at, :date
    change_column :cash_transfers, :transfered_at, :date , null:false
    change_column :sales, :invoiced_at, :date
    change_column :affairs, :dead_line_at, :date
    change_column :purchases, :invoiced_at, :date
    change_column :incoming_payments, :paid_at, :date
    change_column :outgoing_payments, :paid_at, :date
    change_column :intervention_working_periods, :started_at, :date, null:false
    change_column :intervention_working_periods, :stopped_at, :date, null:false
  end
end
