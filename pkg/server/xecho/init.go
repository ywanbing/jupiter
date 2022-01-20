package xecho

import (
	"github.com/douyu/jupiter/internal/hooks"
	"github.com/douyu/jupiter/pkg/server"
)

func init() {

	hooks.Register(hooks.Stage_AfterLoadConfig, func() {
		scheme := "http"
		_ = server.RegisterBuilder(scheme, func() server.Server {
			return RawConfig(scheme).MustBuild()
		})
	})
}
