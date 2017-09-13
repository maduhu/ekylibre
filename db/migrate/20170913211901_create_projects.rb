class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :number
      t.string :description
      t.string :state
      t.date :dead_line_on
      t.jsonb :custom_fields
      t.string :currency, null: false
      t.references :responsible, null: false, index: true
      t.references :entity, null: false, index: true
      t.references :activity, null: false, index: true
      t.references :team, index: true
      t.stamps
    end

    create_table :project_items do |t|
      t.references :project, null: false, index: true
      t.references :variant, null: false, index: true
      t.decimal :quantity, precision: 19, scale: 4, default: 0.0, null: false
      t.decimal :unit_pretax_amount, precision: 19, scale: 4, null: false
      t.decimal :pretax_amount, precision: 19, scale: 4, default: 0.0, null: false
      t.stamps
    end

    add_reference :purchases, :project, index: true
    add_reference :sales, :project, index: true
    
    create_table :work_contract_natures do |t|
      t.string :name
      t.string :description
      t.stamps
    end

    create_table :work_contracts do |t|
      t.references :work_contract_nature, null: false, index: true
      t.references :employee, null: false, index: true
      t.string :description
      t.stamps
    end
    
    create_table :timesheets do |t|
      t.references :work_contract, null: false, index: true
      t.references :payslip, index: true
      
      t.stamps
    end
    
    create_table :timesheet_items do |t|
      t.references :timesheet, null: false, index: true
      t.references :project_items, index: true
      t.stamps
    end
    
    add_reference :intervention_participations, :timesheet_item, index: true

  end
end
