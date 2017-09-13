# == License
# Ekylibre - Simple agricultural ERP
# Copyright (C) 2015 Brice Texier
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

module Backend
  class BeehivesController < Backend::BaseController
    # Save beehive config in preferences
    def update
      params['boxes'] ||= []
      boxes = params['boxes'].sort_by { |a| a[0] }.map do |box|
        next unless box.second['cells']
        cells = box.second['cells'].symbolize_keys.sort_by { |a| a[0] }.map do |cell|
          cell.second.symbolize_keys
        end.compact
        cells.any? ? { cells: cells } : nil
      end.compact
      begin
        current_user.reload
        current_user.prefer!("beehive.#{params[:id]}", {
          version: Backend::BeehiveHelper::FORMAT_VERSION,
          boxes: boxes
        }.deep_stringify_keys.to_yaml)
        head :ok
      rescue ActiveRecord::StaleObjectError
        head :locked
      end
    end

    def reset
      if preference = current_user.preferences.find_by(name: "beehive.#{params[:id]}")
        preference.destroy!
      end
      head :ok
    end
  end
end
