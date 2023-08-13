package UserModels

import (
	"gorm.io/gorm"
	"shop/models"
	"shop/utils"
)

type User struct {
	gorm.Model
	Email    string `gorm:"type:varchar(199)" json:"email"`
	Password string `gorm:"type:varchar(199)" json:"-"`
	Name     string `gorm:"type:varchar(199)" json:"name"`
	Family   string `gorm:"type:varchar(199)" json:"family"`
	Address  string `gorm:"type:text" json:"address"`
	IsAdmin  bool   `json:"is_admin"`
	Credit   uint   `json:"credit"`
}

type TokenModel struct {
	ID uint `json:"id"`
}

func (u *User) GetUser() bool {
	result := models.DB().Where(u).First(u)
	return result.RowsAffected > 0
}

func (u *User) Create() error {
	var err error

	err = u.SetPassword(u.Password)

	if err != nil {
		return err
	}

	result := models.DB().Create(u)
	return result.Error
}

func (u *User) GetUsers(page *int, pageSize *int) (users []User) {
	tx := models.DB().Model(u)
	tx.Scopes(models.Paginate(page, pageSize)).Find(&users)
	return
}

func (u *User) SetPassword(password string) error {
	var err error
	u.Password, err = utils.HashPassword(password)

	if err != nil {
		return err
	}
	return nil
}

func (u *User) Persist() {
	models.DB().Save(u)
}
