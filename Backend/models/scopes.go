package models

import (
	"gorm.io/gorm"
)

func Paginate(page *int, pageSize *int) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		_page := 0
		_pageSize := 10
		if page == nil {
			page = &_page
		}
		if *page == 0 {
			*page = 1
		}
		if pageSize == nil {
			pageSize = &_pageSize
		}
		switch {
		case *pageSize > 100:
			*pageSize = 100
		case *pageSize <= 0:
			*pageSize = 10
		}

		offset := (*page - 1) * (*pageSize)
		return db.Offset(offset).Limit(*pageSize)
	}
}
